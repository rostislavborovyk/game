from django.db import models
from django.contrib.auth import get_user_model


class OnlineUser (models.Model):
    user = models.OneToOneField(get_user_model(), related_name='online_user' , on_delete=models.CASCADE)