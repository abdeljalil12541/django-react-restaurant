from django.contrib import admin
from django.utils import timezone
from .models import Banner, Contact, Gallery, NewsLetter, Reservation

# Register your models here.
admin.site.register(Banner)
admin.site.register(Contact)
admin.site.register(Gallery)
admin.site.register(Reservation)



@admin.register(NewsLetter)
class NewsLetterAdmin(admin.ModelAdmin):
    list_display = ('email', 'get_created_at_display')
    readonly_fields = ('created_at', )
    
    def get_created_at_display(self, obj):
        return timezone.localtime(obj.created_at).strftime("%Y-%m-%d %H:%M:%S")
    get_created_at_display.short_description = 'Created At (Local Time)'