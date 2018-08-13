import json
import urllib

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Business


# Create your views here.
@api_view(['GET', 'POST'])
def listbusiness(request):
    """
    Saves user business details in database
    """
    if request.method == 'GET':
        return Response('{a:Aa}')

    if request.method == 'POST':
        Business(business_name=request.POST.get('business_name', '')).save()
        return Response('{a:ba}')
