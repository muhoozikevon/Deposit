from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Publisher
from .serializers import PublisherSerializer

import random, string
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from .models import PublisherUser  # your custom user model

class PublisherRegister(APIView):
    def post(self, request):
        email = request.data.get('email')
        username = request.data.get('username')
        organization = request.data.get('organization')

        if not email or not username or not organization:
            return Response({'detail': 'Missing required fields'}, status=400)

        if PublisherUser.objects.filter(email=email).exists():
            return Response({'detail': 'Email already registered'}, status=400)

        # Generate temporary password
        password = ''.join(random.choices(string.ascii_letters + string.digits, k=10))

        # Create user
        user = PublisherUser.objects.create_user(
            username=username,
            email=email,
            password=password,
            organization=organization
        )

        # Send password by email
        send_mail(
            subject='Your Legal Deposit Account Details',
            message=f'Hello {username},\n\nYour temporary password is: {password}\n\nPlease log in and change it.',
            from_email='yourgmail@gmail.com',
            recipient_list=[email],
            fail_silently=False
        )

        return Response({'detail': 'Registration successful. Temporary password sent via email.'}, status=201)

