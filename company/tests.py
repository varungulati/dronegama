from company.views import Company, company_list
from rest_framework.test import APITestCase
from rest_framework.test import APIRequestFactory


# Create your tests here.
class CompanyTests(APITestCase):
    def setUp(self):
        self.company = Company.objects.create(company_name="dummy company", address="test", phone="123123123", primary_contact="test", faa_id="11234", introduction="testst")

    def test_getCompanyById(self):
        response = self.client.get('/company/11234/')
        self.assertEqual(response.status_code, 200)

    def test_newCompany(self):
        comp = {"company_name": "testPOST", "address": "test address", "phone": "1231231231", "primary_contact": "new person", "faa_id": "123123", "introduction": "Some Meaningfulintroduction"}
        factory = APIRequestFactory()
        lengthBeforeInsert = Company.objects.count()
        req = factory.post('/company', comp)
        res = company_list(req)
        self.assertEqual(res.status_code, 201)
        self.assertEquals(Company.objects.get(faa_id=comp.get("faa_id")).faa_id, comp.get("faa_id"))
        self.assertEquals(Company.objects.count(), lengthBeforeInsert+1)

    def test_deleteCompanyById(self):
        lengthBeforeInsert = Company.objects.count()
        response = self.client.delete('/company/11234/')
        self.assertEqual(response.status_code, 204)
        self.assertEquals(Company.objects.count(), lengthBeforeInsert - 1)

