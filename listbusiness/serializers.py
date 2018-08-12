from rest_framework import serializers

from listbusiness.models import Business


class BusinessSerializer(serializers.ModelSerializer):
    class Meta:
        model = Business
        fields = ('business_name')
        


