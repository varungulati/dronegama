from django.test import TestCase
from django.test import RequestFactory
from company.models import Company
from company.views import *
from rest_framework.test import APITestCase
from rest_framework.test import APIClient
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.test import APIRequestFactory
from rest_framework.test import force_authenticate
from rest_framework import status


# Create your tests here.


class CompanyTestCase(TestCase):
  def setUp(self):
    Company.objects.create(company_name="dummy company",address="test",phone="123123123",primary_contact="test", faa_id="11234", introduction="testst");

  def test_getCompanyById(self):
    dummy_company = Company.objects.get(faa_id="11234")
    self.assertEqual(dummy_company.company_name, "dummy company")

class CompanyRestTets(APITestCase):
  def setUp(self):
    Company.objects.create(company_name="dummy company",address="test",phone="123123123",primary_contact="test", faa_id="11234", introduction="testst");

  def test_getCompanyById(self):
    factory = APIRequestFactory()
    reques = factory.get('/company/11234')
    res = getCompanyByFaaId(reques, "11234")
    self.assertEqual(res.status_code, 200)

  def test_newCompany(self):
    comp = {"company_name": "testPOST", "address": "test address", "phone": "1231231231", "primary_contact": "new person", "faa_id": "123123", "introduction": "Some Meaningfulintroduction"}
    factory = APIRequestFactory()
    req = factory.post('/company', comp)
    res = company_list(req)
    self.assertEqual(res.status_code, 201)
    self.assertEquals(Company.objects.get(faa_id=comp.get("faa_id")).faa_id, comp.get("faa_id"))

  def test_getCompanyById(self):
    factory = APIRequestFactory()
    self.assertEquals(Company.objects.get(faa_id="11234").faa_id, "11234")
    reques = factory.delete('/company/11234')
    res = getCompanyByFaaId(reques, "11234")
    self.assertEqual(res.status_code, 204)

