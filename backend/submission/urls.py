from django.urls import path
from .views import SubmissionCreate, SubmissionList

urlpatterns = [
    path('submissions/', SubmissionCreate.as_view()),
    path('submissions/all/', SubmissionList.as_view()),
    path('', SubmissionList.as_view(), name='submission-list'),
]
# The above code defines URL patterns for the submission app in a Django project.