from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import MenuCategory, MenuItem, Reservation, Review
from .serializers import MenuCategorySerializer, MenuItemSerializer, ReservationSerializer, ReviewSerializer

class MenuCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = MenuCategory.objects.prefetch_related('items').all()
    serializer_class = MenuCategorySerializer

class MenuItemViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = MenuItem.objects.filter(is_available=True)
    serializer_class = MenuItemSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        category = self.request.query_params.get('category')
        popular = self.request.query_params.get('popular')
        if category:
            qs = qs.filter(category__id=category)
        if popular:
            qs = qs.filter(is_popular=True)
        return qs

class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {'message': 'Reservation confirmed! We look forward to seeing you.', 'data': serializer.data},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ReviewViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

@api_view(['GET'])
def restaurant_info(request):
    return Response({
        'name': 'Moonlight Café',
        'tagline': 'Where Every Bite Tells a Story',
        'address': 'Banda St, Nairobi',
        'phone': '0702 099927',
        'website': 'goldenstar.co.ke',
        'delivery': 'bolt.eu',
        'hours': {'monday': '8:00 AM - 12:00 AM','tuesday': '8:00 AM - 12:00 AM','wednesday': '8:00 AM - 12:00 AM','thursday': '8:00 AM - 12:00 AM','friday': '8:00 AM - 1:00 AM','saturday': '9:00 AM - 1:00 AM','sunday': '9:00 AM - 12:00 AM',},
        'happy_hour': '3:00 PM - 6:00 PM daily',
        'price_range': 'Ksh 1,000 - 1,500 per person',
        'rating': 4.5,'review_count': 291,
        'services': ['Dine-in', 'Takeaway', 'No-contact delivery'],
        'coordinates': {'lat': -1.2833, 'lng': 36.8172},})