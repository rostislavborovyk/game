# tanks_game/routing.py
from django.conf.urls import url

from . import consumers

websocket_urlpatterns = [
    url(r'^ws/tanks_game/(?P<room_name>[^/]+)/$', consumers.GameConsumer),
]
