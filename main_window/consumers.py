import asyncio
import json

from channels.consumer import AsyncConsumer

class ChatConsumer(AsyncConsumer):

    async def websocket_connect(self, event):
        print('connection succesfull', event)
        await self.send({
            'type' : 'websocket.accept'
        })

    async def websocket_receive(self,event):
        print('received: ', event)
        myresponse = {
            'text': event.get('text'),
            'user': self.scope['user'].username,
        }
        resp = json.dumps(myresponse)
        await self.send({
            'type': 'websocket.send',
            'text': resp,
        })

    async def websocket_disconnect(self,event):
        print('closed', event)

