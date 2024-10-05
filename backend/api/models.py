from django.db import models

# Create your models here.
class Banner(models.Model):
    title = models.CharField(max_length=150)
    image = models.ImageField(upload_to='banners/', null=True)
    alt_text = models.CharField(max_length=150)
    
    def __str__(self):
        return self.title
    
    
    
class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20, null=True, blank=True)  # Adjust max_length as needed
    message = models.TextField()

    def __str__(self):
        return self.name
    
    
    
    
class Gallery(models.Model):
    title = models.CharField(max_length=150)
    image1 = models.ImageField(upload_to='image1/')
    image2 = models.ImageField(upload_to='image2/')
    image3 = models.ImageField(upload_to='image3/')
    image4 = models.ImageField(upload_to='image4/')
    image5 = models.ImageField(upload_to='image5/')
    image6 = models.ImageField(upload_to='image6/')
    
    class Meta:
        verbose_name_plural = "Galleries"
        


class Reservation(models.Model):
    CHOICES =( 
        ("Fumeur", "Fumeur"), 
        ("Non Fumeur", "Non Fumeur"), 
        ("Sans Avis", "Sans Avis"), 
    ) 
    
    
    name = models.CharField(max_length=150)
    email = models.EmailField(max_length=150)
    phone_number = models.CharField(max_length=150)
    date = models.CharField(max_length=50)
    time = models.CharField(max_length=50)
    espace = models.CharField(max_length=150, choices=CHOICES)
    message = models.TextField()
    
    def __str__(self):
        return f'Table No-{self.id}'
    
    
    
    
class NewsLetter(models.Model):
    email = models.EmailField(max_length=150)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    
    def __str__(self):
        return f'Email: {self.email} ---- Created at: {self.created_at}'