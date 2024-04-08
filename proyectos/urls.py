from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from proyectos import views

#versionado de api
router = routers.DefaultRouter()
router.register(r'proyectos', views.proyectView, 'proyectos')
#todo esto esta manejando el crud de proyectos solo con las funciones que trae
#django la cual si defines un modelo de datos puedes crear un crud por defecto
urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title="proyectos API"))
    
]
