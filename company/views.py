from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from company.models import Company
from company.serializers import CompanySerializer

@api_view(['GET', 'POST'])
def company_list(request):
    """
    List all tasks, or create a new task.
    """
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(
                serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'DELETE'])
def getCompanyByFaaId(request, faaId):
    if request.method == 'GET':
        company = Company.objects.get(faa_id=faaId)
        serializer = CompanySerializer(company, many=False);
        return Response(serializer.data)
    elif request.method == 'DELETE':
        Company.objects.filter(faa_id=faaId).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

