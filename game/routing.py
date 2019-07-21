# mysite/routing.py
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from django.conf.urls import url
from main_window.consumers import ChatConsumer
from tanks_game.consumers import GameConsumer
application = ProtocolTypeRouter({
    'websocket': AuthMiddlewareStack(
        URLRouter([
            url(r"^$", ChatConsumer),
            url(r'^ws/tanks_game/(?P<room_name>[^/]+)/$', GameConsumer)
            ]
        ),
    ),
})
