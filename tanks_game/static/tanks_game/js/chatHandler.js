var data1 = new Data(0, 0, 0);
var data2 = new Data(0, 0, 0);
var chatSocket;

function main() {


    var roomName = document.getElementById("data1").value;
    chatSocket = new WebSocket(
        'ws://' + window.location.host +
        '/ws/tanks_game/' + roomName + '/');


    chatSocket.onmessage = function (e) {
        var data = JSON.parse(e.data);
        var message = data['message'];
        data2.setCords(message[0], message[1], message[2]);

        console.log("Data received: " + data2.x + " " + data2.y + " " + data2.angle);
    };

    chatSocket.onclose = function (e) {
        console.error('Chat socket closed unexpectedly');
    };

    // document.onmousemove = function (e) {
    //     chatSocket.send(JSON.stringify({
    //         'message': [data1.x, data1.y]
    //     }));
    // };




}

window.onload = main;