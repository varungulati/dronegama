from .settings_base import *


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'postgres',
        'USER': 'DEV',
        'PASSWORD': 'dronegama',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True