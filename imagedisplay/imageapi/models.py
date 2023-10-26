from django import forms

class ImageUploadForm(forms.Form):
    title = forms.CharField(max_length=100)
    image = forms.ImageField()