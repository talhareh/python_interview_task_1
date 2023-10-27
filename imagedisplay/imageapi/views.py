

from django.shortcuts import render
from django.http import JsonResponse
from django.conf import settings
import os

def upload_image(request):
    if request.method == 'POST' and request.FILES['image']:
        image = request.FILES['image']
        title = request.POST.get('title', '')
        with open(os.path.join(settings.MEDIA_ROOT, image.name), 'wb') as f:
            for chunk in image.chunks():
                f.write(chunk)
        return JsonResponse({'message': 'Image uploaded successfully'})
    return JsonResponse({'message': 'Image upload failed'})

def list_images(request):
    media_path = settings.MEDIA_ROOT
    image_files = [f for f in os.listdir(media_path) if os.path.isfile(os.path.join(media_path, f))]
    images = [{'title': os.path.splitext(image)[0], 'url': os.path.join(settings.MEDIA_URL, image)} for image in image_files]
    return JsonResponse(images, safe=False)
