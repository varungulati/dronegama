from django.contrib import admin
from models import UserProfileModel
# Register your models here.
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'gender']

admin.site.register(UserProfileModel, UserProfileAdmin)