from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Business(models.Model):
    business_name = models.TextField(db_column='BUSINESS_NAME', blank=True, null=True)  # Field name made lowercase.
    update_timestamp = models.DateTimeField(auto_now_add=True, blank=False)  # Field name made lowercase.
    latest_in = models.BooleanField(db_column='LATEST_IN', blank=False, default=True) # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'BUSINESS'