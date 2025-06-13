from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class Publisher(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    organization = models.CharField(max_length=255)
    is_verified = models.BooleanField(default=False)
    is_google_account = models.BooleanField(default=False) 
    is_admin = models.BooleanField(default=False)

class PublisherUser(AbstractUser):
    organization = models.CharField(max_length=255)
    is_verified = models.BooleanField(default=False)
    is_google_account = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)

    def __str__(self):
        return self.name
