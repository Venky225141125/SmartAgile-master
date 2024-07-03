from rest_framework import generics
from .models import SignupData
from .serializers import SignupDataSerializer
from django.core.exceptions import ValidationError
import traceback
from django.core import validators
from backend import settings
import random
from django.views import View
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
from django.http import JsonResponse
from datetime import date, timedelta
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from .models import SignupData  # Import the model
import traceback


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
        self.ensure_user_tables(user_data.id)
        start_continous_task(user_data.id)
        # Serialize user data
        serializer = SignupDataSerializer(user_data)
        return Response({'message': 'Login successful.', 'user': serializer.data,}, status=status.HTTP_200_OK)

    def ensure_user_tables(self, user_id):
        table_suffix = f"_{user_id}"

        with connection.cursor() as cursor:
            # Check and create application_usage table if it does not exist
            cursor.execute(f"""
                CREATE TABLE IF NOT EXISTS application_usage{table_suffix} (
                    ID SERIAL PRIMARY KEY,
                    ApplicationName TEXT,
                    Task TEXT,
                    Category TEXT,
                    Duration REAL,
                    IdleTime REAL,
                    Keystrokes REAL,
                    Clicks REAL,
                    Scrolls REAL,
                    Date DATE,
                    UNIQUE (ApplicationName, Task, Date)
                )
            """)

            # Check and create browser_usage table if it does not exist
            cursor.execute(f"""
                CREATE TABLE IF NOT EXISTS browser_usage{table_suffix} (
                    ID SERIAL PRIMARY KEY,
                    BrowserName TEXT,
                    Website TEXT,
                    Category TEXT,
                    Duration REAL,
                    IdleTime REAL,
                    Keystrokes REAL,
                    Clicks REAL,
                    Scrolls REAL,
                    Date DATE,
                    UNIQUE (BrowserName, Website, Date)
                )
            """)

            # Check and create application_openings_count table if it does not exist
            cursor.execute(f"""
                CREATE TABLE IF NOT EXISTS application_openings_count{table_suffix} (
                    ID SERIAL PRIMARY KEY,
                    ApplicationName TEXT UNIQUE,
                    OpenCount INT
                )
            """)
        

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
from django.db import connection
from django.utils import timezone
from datetime import timedelta
from django.http import JsonResponse
from django.core import validators
from django.utils.dateparse import parse_date
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

            table_name = f'application_usage_{user.id}'

            with connection.cursor() as cursor:
                cursor.execute(f"""
                    SELECT 
                        applicationname, 
                        category, 
                        SUM(duration) as duration, 
                        date
                    FROM {table_name}
                    GROUP BY applicationname, category, date
                """)
                data = cursor.fetchall()

            data_list = [{'applicationname': row[0], 'category': row[1], 'duration': row[2], 'date':row[3]} for row in data]

            return JsonResponse(data_list, safe=False)

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
    return JsonResponse({'error': 'Invalid request method'}, status=400)
# class AppData(View):
#     def post(self, request):
#         try:
#             email = request.POST.get('email')
#             date_filter = request.POST.get('dateFilter')
#             start_date = request.POST.get('startDate')
#             end_date = request.POST.get('endDate')

#             if not email:
#                 return JsonResponse({'error': 'Email is required'}, status=400)
            
#             validators.validate_email(email)  # Validate email format
#             user = SignupData.objects.filter(email=email).first()

#             if not user:
#                 return JsonResponse({'error': 'User not found'}, status=404)

#             table_name = f'application_usage_{user.id}'

#             # Default date filter is today
#             date_query = f"DATE(timestamp) = '{timezone.now().date()}'"

#             if date_filter == 'Yesterday':
#                 date_query = f"DATE(timestamp) = '{(timezone.now() - timedelta(days=1)).date()}'"
#             elif date_filter == 'This Week':
#                 start_of_week = timezone.now() - timedelta(days=timezone.now().weekday())
#                 date_query = f"DATE(timestamp) >= '{start_of_week.date()}'"
#             elif date_filter == 'Custom':
#                 if not start_date or not end_date:
#                     return JsonResponse({'error': 'Both startDate and endDate are required for custom date filter'}, status=400)
                
#                 start_date_parsed = parse_date(start_date)
#                 end_date_parsed = parse_date(end_date)
                
#                 if not start_date_parsed or not end_date_parsed:
#                     return JsonResponse({'error': 'Invalid date format'}, status=400)
                
#                 date_query = f"DATE(timestamp) BETWEEN '{start_date_parsed}' AND '{end_date_parsed}'"

#             with connection.cursor() as cursor:
#                 cursor.execute(f"SELECT applicationname, category, duration FROM {table_name} WHERE {date_query}")
#                 data = cursor.fetchall()

#             data_list = [{'applicationname': row[0], 'category': row[1], 'duration': row[2]} for row in data]

#             return JsonResponse(data_list, safe=False)

#         except validators.ValidationError as e:
#             logger.error(f"Validation error: {e}")
#             return JsonResponse({'error': 'Invalid email format'}, status=400)
#         except Exception as e:
#             logger.error(f"Unexpected error: {e}")
#             return JsonResponse({'error': 'An unexpected error occurred'}, status=500)