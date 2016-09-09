from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from company.models import Company
from company.serializers import CompanySerializer

from django.views.decorators.csrf import ensure_csrf_cookie

@ensure_csrf_cookie
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
        serializer = CompanySerializer(data=request.DATA)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(
                serializer.errors, status=status.HTTP_400_BAD_REQUEST)