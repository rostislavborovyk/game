from django.urls import path
from django.conf.urls import include
from django.contrib.auth import urls as account_urls
from . import views

urlpatterns = [
    path('', include(account_urls), name="accoun"),
    path('reg', views.registration, name = "registrtion"),
    path('profile', views.redir , name ='redirect'),
]
