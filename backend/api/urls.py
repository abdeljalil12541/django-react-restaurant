from django.urls import path
from . import views

urlpatterns = [
    path('banners/', views.BannersView.as_view(), name='banners'),
    path('contacts/', views.ContactView.as_view(), name='contacts'),
    path('galleries/', views.GalleryView.as_view(), name='galleries'),
    path('réservation/', views.TableReservationView.as_view(), name='réservation-view'),
    path('get-home-gallery/', views.HomePageGalleryView.as_view(), name='get-home-gallery'),
    path('news-letter/', views.NewsLetterView.as_view(), name='news-letter')
]