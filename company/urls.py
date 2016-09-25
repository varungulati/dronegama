from django.conf.urls import url

from . import views

urlpatterns = [
    # ex: /polls/
    url(r'^$', views.company_list, name='company_list'),
    url(r'(?P<faaId>\d+)/$', views.getCompanyByFaaId, name='getCompanyByFaaId')
]
