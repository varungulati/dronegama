from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Company(models.Model):
    company_name = models.TextField(db_column='COMPANY_NAME', blank=True, null=True)  # Field name made lowercase.
    address = models.TextField(db_column='ADDRESS', blank=True, null=True)  # Field name made lowercase.
    phone = models.BigIntegerField(db_column='PHONE', blank=True, null=True)  # Field name made lowercase.
    primary_contact = models.TextField(db_column='PRIMARY_CONTACT', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    faa_id = models.TextField(db_column='FAA_ID', primary_key=True)  # Field name made lowercase.
    introduction = models.TextField(db_column='INTRODUCTION', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'COMPANY'