# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2018-03-08 04:55
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ticker', '0002_auto_20180307_2328'),
    ]

    operations = [
        migrations.RenameField(
            model_name='ticker',
            old_name='sybmol',
            new_name='symbol',
        ),
    ]
