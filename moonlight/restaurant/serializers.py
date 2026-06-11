from rest_framework import serializers
from .models import MenuCategory, MenuItem, Reservation, Review

class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = 'all'

class MenuCategorySerializer(serializers.ModelSerializer):
    items = MenuItemSerializer(many=True, read_only=True)
    class Meta:
        model = MenuCategory
        fields = 'all'

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = 'all'
        read_only_fields = ['status','created_at']

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = 'all'