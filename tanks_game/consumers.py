# tanks_game/consumers.py
from channels.generic.websocket import AsyncWebsocketConsumer
import json
from channels.layers import get_channel_layer
from pprint import pprint
import time


class GameConsumer(AsyncWebsocketConsumer):
    # todo such method uses a lot of cpu resources(needs to be stored t database)
    # todo add dict to handle multiple rooms
    Channels_data_base = []

    async def connect(self):

        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'tanks_game_%s' % self.room_name

        # Join room group
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()
        GameConsumer.Channels_data_base.append(self.channel_name)

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )
        GameConsumer.Channels_data_base.remove(self.channel_name)

    # Receive message from WebSocket
    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        # Send message to room group
        # await self.channel_layer.group_send(
        #     self.room_group_name,
        #     {
        #         'type': 'chat_message',
        #         'message': message,
        #         'id': self.id,
        #     }
        # )
        channel_layer = get_channel_layer()
        # print(ChatConsumer.Channels_data_base)
        for channel in GameConsumer.Channels_data_base:
            if channel == self.channel_name:
                pass
            else:
                await channel_layer.send(channel, {
                    'type': 'chat_message',
                    'message': message,
                })

    # Receive message from room group
    async def chat_message(self, event):
        message = event['message']

        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'message': message,
        }))
