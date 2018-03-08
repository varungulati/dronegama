from rest_framework import serializers

from ticker.models import Ticker


class TickerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticker
        fields = ('symbol', 'price')
        


