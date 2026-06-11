from django.urls import path,include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('menu/categories', views.MenuCategoryViewSet)
router.register('menu/items', views.MenuItemViewSet)
router.register('reservations', views.ReservationViewSet)
router.register('reviews', views.ReviewViewSet)

urlpatterns = [
    path('', include(router.urls)), 
    path('info/', views.restaurant_info),
    ]