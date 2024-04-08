from rest_framework import viewsets
from .serializer import proyectosSerializer
from .models import proyectos
# Create your views here.
class proyectView(viewsets.ModelViewSet):
    serializer_class = proyectosSerializer
    queryset = proyectos.objects.all()