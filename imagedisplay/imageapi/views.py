

# Create your views here.
from django.shortcuts import render, redirect
from .models import ImageUploadForm
import os

def image_list(request):
    image_dir = os.path.join(os.getcwd(), 'media/images')
    images = [f for f in os.listdir(image_dir) if os.path.isfile(os.path.join(image_dir, f))]
    return render(request, 'src/imagelist.js', {'images': images})

def upload_image(request):
    if request.method == 'POST':
        form = ImageUploadForm(request.POST, request.FILES)
        if form.is_valid():
            title = form.cleaned_data['title']
            image = request.FILES['image']
            
            # Save image to media folder
            image_dir = os.path.join(os.getcwd(), 'media/images')
            with open(os.path.join(image_dir, image.name), 'wb') as destination:
                for chunk in image.chunks():
                    destination.write(chunk)

            return redirect('image_list')
    else:
        form = ImageUploadForm()
    return render(request, 'src/upload.js', {'form': form})
