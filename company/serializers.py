from rest_framework import serializers

from company.models import Company


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('faa_id', 'company_name', 'address', 'phone', 'primary_contact', 'introduction')
        


