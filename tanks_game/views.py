# tanks_game/views.py
from django.shortcuts import render
from django.utils.safestring import mark_safe
import json
import time


def index(request):
    return render(request, 'tanks_game/index.html', {})


def room(request, room_name):
    uid = time.time()
    print(room_name)
    print(type(room_name))
    return render(request, 'tanks_game/room.html', {
        'room_name_json': mark_safe(json.dumps(room_name)),
        'uid': uid,
    })
