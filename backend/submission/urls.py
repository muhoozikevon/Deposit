from .views import SubmissionRegister
from django.urls import path

urlpatterns = [
    path('submission/register/', SubmissionRegister.as_view(), name='submission-register'),
]