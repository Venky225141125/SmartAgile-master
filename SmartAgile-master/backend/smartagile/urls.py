from django.urls import path
from .views import *

urlpatterns = [
    path('signup/', SignupDataCreateView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('check_data/', CheckDataView.as_view(), name='check_data'),
]
