from rest_framework import serializers
from .models import proyectos

class proyectosSerializer(serializers.ModelSerializer):
    class Meta:
        model = proyectos
        fields = '__all__'