from django.db import models

# Create your models here.
class MenuCategory(models.Model):
    category = models.CharField(max_length= 20)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name_plural = 'Menu Categories'

        def __str__(self):
            return self.name

class MenuItem(models.Model):
    name = models.CharField(max_length=100)
    category = models.ForeignKey(MenuCategory, on_delete=models.CASCADE, related_name='items')
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    is_popular = models.BooleanField(default=False)
    is_available = models.BooleanField(default=True)
    image_url = models.URLField(blank=True)
    def __str__(self):
        return f"{self.name} - Ksh {self.price}"

class Reservation(models.Model):
    STATUS_CHOICES:[('pending','Pending'),('confirmed','Confirmed'),('cancelled','Cancelled')]
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.IntegerField(max_length=20)
    date = models.DateField()
    time = models.TimeField(blank=True)
    guests = models.IntegerField()
    special_requests = models.TextField(blank=True)
    status = models.CharField(max_length=20,choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add= True)

    def __str__(self):
        return f"{self.name} - {self.date} {self.time} ({self.guests} guests)"

class Review(models.Model):
    author = models.CharField(max_length=200)
    rating = models.IntegerField()
    text = models.TextField()
    date = models.CharField(max_length=50)
    avatar_initials = models.CharField(max_length=3)

    def __str__(self):
        return f"{self.author} - {self.rating}★"


    