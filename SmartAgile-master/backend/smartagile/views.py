from rest_framework import generics
from .models import SignupData
from .serializers import SignupDataSerializer
# views.py
from django.db import connection
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.contrib.auth import authenticate, login
from .models import SignupData
from .serializers import SignupDataSerializer
from .continous_task import start_continous_task,stop_continous_task

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
        return Response({'message': 'Login successful.', 'user': serializer.data}, status=status.HTTP_200_OK)

    def ensure_user_tables(self, user_id):
        table_suffix = f"_{user_id}"

        with connection.cursor() as cursor:
            # Check and create application_usage table if it does not exist
            cursor.execute(f"""
                CREATE TABLE IF NOT EXISTS application_usage{table_suffix} (
                    ID SERIAL PRIMARY KEY,
                    ApplicationName TEXT,
                    Task TEXT,
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
        

# class SignupDataCreateView(generics.CreateAPIView):
#     queryset = SignupData.objects.all()
#     serializer_class = SignupDataSerializer
#     def create(self, request, *args, **kwargs):
#         email = request.data.get('email')
#         if SignupData.objects.filter(email=email).exists():
#             return Response({'error': 'Email already exists.'}, status=status.HTTP_400_BAD_REQUEST)
        
#         return super().create(request, *args, **kwargs)

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
