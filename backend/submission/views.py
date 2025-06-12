from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Submission
from .serializers import SubmissionSerializer

class SubmissionCreate(generics.CreateAPIView):
    queryset = Submission.objects.all()
    serializer_class = SubmissionSerializer

class SubmissionList(generics.ListAPIView):
    queryset = Submission.objects.all()
    serializer_class = SubmissionSerializer
class SubmissionDetail(generics.RetrieveAPIView):
    queryset = Submission.objects.all()
    serializer_class = SubmissionSerializer
