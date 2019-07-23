from django.shortcuts import render ,redirect
from django.contrib.auth.decorators import login_required
from .models import OnlineUser
import logging



@login_required(login_url='/accounts/login')
def main(request):
    try:
        OnlineUser.objects.create(user=request.user)
    except Exception as e:
        pass
    online_users = OnlineUser.objects.all()
    return render(request, 'index.html', {
        'user': request.user,
        'online': online_users
    })
