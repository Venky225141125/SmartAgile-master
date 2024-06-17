from rest_framework import serializers
from .models import SignupData

class SignupDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = SignupData
        fields = ['username', 'email', 'password', 'role', 'profile_photo']