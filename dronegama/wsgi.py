"""
WSGI config for dronegama project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.10/howto/deployment/wsgi/
"""

import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "dronegama.settings_dev")

print("Using DJANGO_SETTINGS_MODULE", os.environ.get("DJANGO_SETTINGS_MODULE", None));

application = get_wsgi_application()
