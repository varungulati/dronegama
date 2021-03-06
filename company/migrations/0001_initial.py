# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-09-11 18:38
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('company_name', models.TextField(blank=True, db_column='COMPANY_NAME', null=True)),
                ('address', models.TextField(blank=True, db_column='ADDRESS', null=True)),
                ('phone', models.BigIntegerField(blank=True, db_column='PHONE', null=True)),
                ('primary_contact', models.TextField(blank=True, db_column='PRIMARY_CONTACT', null=True)),
                ('faa_id', models.TextField(db_column='FAA_ID', primary_key=True, serialize=False)),
                ('introduction', models.TextField(blank=True, db_column='INTRODUCTION', null=True)),
            ],
            options={
                'db_table': 'COMPANY',
                'managed': True,
            },
        ),
    ]
