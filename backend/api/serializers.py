from rest_framework import serializers
from .models import Banner, Contact, Gallery, NewsLetter, Reservation

class BannerSerialier(serializers.ModelSerializer):
    class Meta:
        model = Banner
        fields = ['title', 'image', 'alt_text']
        
        
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['name', 'email', 'phone_number', 'message'] 
        
        
class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = ['title', 'image1', 'image2', 'image3', 'image4', 'image5', 'image6']
        
        
class TableReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = ['name', 'email', 'phone_number', 'date', 'time', 'espace', 'message']
        
        
        
        
class NewsLetterSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsLetter
        fields = ('email',)