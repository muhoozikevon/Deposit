from django.urls import path
from .views import SubmissionCreate, SubmissionList

urlpatterns = [
    path('submissions/', SubmissionCreate.as_view()),
    path('submissions/all/', SubmissionList.as_view()),
]
# The above code defines URL patterns for the submission app in a Django project.