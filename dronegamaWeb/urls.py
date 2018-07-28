from django.conf.urls import url

from . import views

urlpatterns = [
    # ex: /polls/
    url(r'^$', views.index, name='index'),
    url(r'api/', views.api, name='api'),
    url('register', views.register, name='register')
]
