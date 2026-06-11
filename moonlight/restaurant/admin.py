from django.contrib import admin
from .models import MenuCategory,MenuItem,Reservation,Review

# Register your models here.
@admin.register(MenuCategory)
class MenuCategoryAdmin(admin.ModelAdmin):
    list_display = ['category','order']

@admin.register(MenuItem)
class MenuItemAdmin(admin.ModelAdmin):
    list_display = ['name','price','category','is_popular','is_available'] 
    list_filter=['category','is_popular','is_available']

@admin.register(Reservation)
class ReservationAdmin(admin.ModelAdmin):
    list_display = ['name', 'date','time','guests','status','created_at'] 
    list_filter = ['status','date']

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ['author', 'rating', 'date']