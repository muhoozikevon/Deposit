from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from publisher.views import CustomTokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('api/', include('publisher.urls')),
    path('api/', include('submission.urls')),
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/password_reset/', include('django_rest_passwordreset.urls', namespace='password_reset')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
