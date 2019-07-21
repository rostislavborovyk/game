from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import OnlineUser

@login_required(login_url='/accounts/login')
def main(request):
    online_users = OnlineUser.objects.all()
    return render(request, 'index.html', {
        'user': request.user,
        'online': online_users
    })
