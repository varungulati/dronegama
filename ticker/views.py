import json
import urllib

from rest_framework.decorators import api_view
from rest_framework.response import Response

from ticker.models import Ticker
from ticker.serializers import TickerSerializer


# Create your views here.
@api_view(['GET'])
def ticker(request):
    """
    Gets the current ticker price.
    """
    if request.method == 'GET':
        url = 'https://bittrex.com/api/v1.1/public/getmarketsummaries'
        data = json.load(urllib.request.urlopen(url))
        Ticker.objects.update(latest_in = False)
        for values in data['result']:
            obj = Ticker(symbol = values['MarketName'], price = values['Last'])
            obj.save()
        companies = Ticker.objects.filter(latest_in = True)
        serializer = TickerSerializer(companies, many=True)
        return Response(serializer.data)

