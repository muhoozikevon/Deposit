from django.db import models

# Create your models here.
from django.db import models
from publisher.models import Publisher

class Submission(models.Model):
    FORMAT_CHOICES = [('PDF', 'PDF'), ('EPUB', 'EPUB')]
    
    publisher = models.ForeignKey(Publisher, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    file = models.FileField(upload_to='deposits/')
    format = models.CharField(max_length=10, choices=FORMAT_CHOICES)
    isbn = models.CharField(max_length=20)
    authors = models.CharField(max_length=255)
    publication_date = models.DateField()
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
