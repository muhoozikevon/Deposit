from .views import SubmissionRegister

urlpatterns = [
    path('Submission/register/', SubmissionRegister.as_view()),
]