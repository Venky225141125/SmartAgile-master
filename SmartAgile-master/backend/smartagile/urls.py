from django.urls import path
from .views import SignupDataCreateView, LoginView, CheckDataView, ForgotPasswordView,ResetPasswordView

urlpatterns = [
    path('signup/', SignupDataCreateView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('check_data/', CheckDataView.as_view(), name='check_data'),
    path('forgetpassword/', ForgotPasswordView.as_view(), name='forgetpassword'),
    path('resetpassword/', ResetPasswordView.as_view(), name='resetpassword'),
]
