from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import BannerSerialier, ContactSerializer, GallerySerializer, NewsLetterSerializer, TableReservationSerializer
from .models import Banner, Contact, Gallery, Reservation  # Import the Banner model

class BannersView(APIView):
    def get(self, request, format=None):
        banners = Banner.objects.all()  # Get all banner objects
        serializer = BannerSerialier(banners, many=True)  # Serialize the queryset
        return Response({'banners': serializer.data})  # Return serialized data
    
    
    
class ContactView(APIView):
    def post(self, request, format=None):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)  # Log the errors for debugging
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        


class GalleryView(APIView):
    def get(self, request, format=None):
        galleries = Gallery.objects.all()
        serializer = GallerySerializer(galleries, many=True)
    
        return Response({'galleries': serializer.data})
    
    

class HomePageGalleryView(APIView):
    def get(self, request, format=None):
        images_list = []
        galleries = Gallery.objects.all()

        for gallery in galleries:
            if gallery.image1:
                images_list.append(gallery.image1.url)
            if gallery.image2:
                images_list.append(gallery.image2.url)
            if gallery.image3:
                images_list.append(gallery.image3.url)
            if gallery.image4:
                images_list.append(gallery.image4.url)
            if gallery.image5:
                images_list.append(gallery.image5.url)
            if gallery.image6:
                images_list.append(gallery.image6.url)
            # images_list = images_list[:4]            
        return Response({'images_list': images_list}, status=status.HTTP_200_OK)
    
    
class TableReservationView(APIView):
    def post(self, request, format=None):
        serializer = TableReservationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        
        
        
class NewsLetterView(APIView):
    def post(self, request, format=None):
        serializer = NewsLetterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)