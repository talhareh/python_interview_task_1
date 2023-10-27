# appname/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('upload/', views.upload_image, name='upload_image'),
    path('list/', views.list_images, name='list_images'),
]
