from django.urls import path
from .views import PublisherRegister

urlpatterns = [
    path('publisher/register/', PublisherRegister.as_view()),
]
