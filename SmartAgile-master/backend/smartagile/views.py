from rest_framework import generics
from .models import SignupData
import psycopg2
from datetime import timedelta
from .serializers import SignupDataSerializer
from django.core.exceptions import ValidationError
import traceback
from django.core import validators
from backend import settings
import random
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ObjectDoesNotExist
from email.mime.text import MIMEText
import smtplib
from django.db import connection
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.contrib.auth import authenticate, login
from .models import SignupData
from .serializers import SignupDataSerializer
from .continous_task import start_continous_task,stop_continous_task
from collections import namedtuple

AttendanceData=namedtuple('AttendanceData',['time_duration', 'offline_time'])

class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')

        # Query the database to retrieve the user's data
        try:
            user_data = SignupData.objects.get(email=email)
        except SignupData.DoesNotExist:
            return Response({'error': 'User with this email does not exist.'}, status=status.HTTP_404_NOT_FOUND)

        # Check if password matches
        if user_data.password != password:
            return Response({'error': 'Invalid email or password.'}, status=status.HTTP_401_UNAUTHORIZED)

        # Ensure user tables are created
        start_continous_task(user_data.id)

        attendance_data = self.get_attendance_data(user_data.id)
        # Serialize user data
        serializer = SignupDataSerializer(user_data)
        print("attendance time_duration:",attendance_data.time_duration)
        print("attendance offline_time:",attendance_data.offline_time)
        return Response({
            'message': 'Login successful.',
            'user': serializer.data,
            'attendance': {
                "time_duration":attendance_data.time_duration,
                "offline_time":attendance_data.offline_time
            }
        }, status=status.HTTP_200_OK)

    def get_attendance_data(self, user_id):
        table_suffix = f"_{user_id}"
        db_settings = settings.DATABASES['default']
        conn = psycopg2.connect(
            dbname=db_settings['NAME'],
            user=db_settings['USER'],
            password=db_settings['PASSWORD'],
            host=db_settings['HOST'],
            port=db_settings['PORT']
        )
        cursor = conn.cursor()

        cursor.execute(f"""
            SELECT SUM(duration) FROM attendence{table_suffix} WHERE Date = CURRENT_DATE
        """)
        result = cursor.fetchone()
        conn.close()

        if result and result[0]:
            time_duration = result[0]
            offline_time = (8.5 * 3600) - time_duration  # 8.5 hours converted to seconds
            offline_time = max(offline_time, 0)  # Ensure offline time is not negative
        else:
            time_duration = 0
            offline_time = 8.5 * 3600
        print("time_duration:",str(timedelta(seconds=time_duration)))
        print("offline_time:", str(timedelta(seconds=offline_time)))

        return AttendanceData(time_duration=str(timedelta(seconds=time_duration)),offline_time=str(timedelta(seconds=offline_time)))

class SignupDataCreateView(APIView):
    def post(self, request):
        serializer = SignupDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CheckDataView(APIView):
    def get(self, request, *args, **kwargs):
        try:
            # Query the database to check if any data exists
            data_exists = SignupData.objects.exists()
            if data_exists:
                signup_data = SignupData.objects.all()
                serializer = SignupDataSerializer(signup_data, many=True)
                data = serializer.data
            else:
                data = None
            return Response({'data_exists': data_exists,'data':data})
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class ForgotPasswordView(APIView):
    def post(self, request):
        try:
            email = request.data.get('email')
            
            if not email:
                return Response({'error': 'Email is required'}, status=400)

            validators.validate_email(email)  # Validate email format
            user = SignupData.objects.filter(email=email).first()
            if not user:
                return Response({'error': 'User with this email does not exist.'}, status=400)
            
            otp = random.randint(100000, 999999)
            request.session['otp'] = otp
            request.session['reset_email'] = email

            smtp_server = settings.EMAIL_HOST
            smtp_port = 587  # Change according to your SMTP server settings
            smtp_username = settings.EMAIL_HOST_USER
            smtp_password = settings.EMAIL_HOST_PASSWORD
            sender_email = settings.EMAIL_HOST_USER

            subject = 'Password Reset OTP'
            body = f'Your OTP for password reset is {otp}.'
            self.send_email(subject, body, sender_email, email, smtp_server, smtp_port, smtp_username, smtp_password)

            return Response({'message': 'Reset instructions sent to your email.', 'otp': otp})

        except validators.ValidationError as e:
            return Response({'error': str(e)}, status=400)

        except Exception as e:
            traceback.print_exc()  # Print the traceback to console
            return Response({'error': 'Internal Server Error'}, status=500)

    def send_email(self, subject, message, sender_email, receiver_email, smtp_server, smtp_port, smtp_username, smtp_password):
        msg = MIMEText(message)
        msg['Subject'] = subject
        msg['From'] = sender_email
        msg['To'] = receiver_email

        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(smtp_username, smtp_password)
            server.sendmail(sender_email, receiver_email, msg.as_string())

from django.core.exceptions import ObjectDoesNotExist
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from .models import SignupData  # Import the model
import traceback

class ResetPasswordView(APIView):
    def post(self, request):
        try:
            otp = request.data.get('otp')
            sotp = request.data.get('sotp')
            email = request.data.get('email')
            new_password = request.data.get('password')

            if otp != sotp:
                return Response({'error': "OTP doesn't match"}, status=400)

            if not email:
                return Response({'error': 'Email is required'}, status=400)

            user = SignupData.objects.filter(email=email).first()
            if not user:
                return Response({'error': 'User with this email does not exist.'}, status=400)

            # Hash the new password
            #hashed_password = make_password(new_password)
            user.password = new_password
            user.save()

            return Response({'message': 'Password updated successfully'}, status=200)
        
        except ObjectDoesNotExist:
            return Response({'error': 'User with the given email does not exist'}, status=400)
        except Exception as e:
            traceback.print_exc()
            return Response({'error': str(e)}, status=500)
        
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

#@method_decorator(csrf_exempt, name='dispatch')
from django.http import JsonResponse
from django.views import View
from rest_framework.response import Response
from django.core import validators
from .models import SignupData
from django.db import connection
import logging
#application_usage_15
logger = logging.getLogger(__name__)

@method_decorator(csrf_exempt, name='dispatch')
class AppData(View):
    def post(self, request):
        try:
            email = request.POST.get('email')
            
            if not email:
                return Response({'error': 'Email is required'}, status=400)
            
            validators.validate_email(email)  # Validate email format
            user = SignupData.objects.filter(email=email).first()

            if not user:
                return JsonResponse({'error': 'User not found'}, status=404)

            table_name = f'_{user.id}'

            with connection.cursor() as cursor:
                cursor.execute(f"""
                    SELECT 
                        applicationname, 
                        category, 
                        SUM(duration) as duration, 
                        date
                    FROM application_usage{table_name}
                    GROUP BY applicationname, category, date
                """)
                data = cursor.fetchall()
                cursor.execute(f"""
                    SELECT 
                        browsername, 
                        category, 
                        SUM(duration) as duration, 
                        date
                    FROM browser_usage{table_name}
                    GROUP BY browsername, category, date
                """)
                browser_data=cursor.fetchall()
            browser_data_list=[{'applicationname': row[0], 'category': row[1], 'duration': row[2], 'date':row[3]} for row in browser_data]
            data_list = [{'applicationname': row[0], 'category': row[1], 'duration': row[2], 'date':row[3]} for row in data]
            combined_list=data_list+browser_data_list
            return JsonResponse(combined_list, safe=False)

        except validators.ValidationError as e:
            logger.error(f"Validation error: {e}")
            return JsonResponse({'error': 'Invalid email format'}, status=400)
        except Exception as e:
            logger.error(f"Unexpected error: {e}")
            return JsonResponse({'error': 'An unexpected error occurred'}, status=500)

from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import logout
@csrf_exempt
def logout_view(request):
    if request.method == 'POST':
        stop_continous_task()
        logout(request)
        return JsonResponse({'message': 'Successfully logged out'}, status=200)
    return JsonResponse({'error': 'Invalid request method'},status=400)

