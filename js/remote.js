var PPT = 1;

var OP_UP = 0;
var OP_DOWN = 1;
var OP_LEFT = 2;
var OP_RIGHT = 3;

var socket = new WebSocket('ws://localhost:3000');

socket.onopen = function (event) {
    console.log('connection has been established.');
};

socket.onmessage = function (event) {
    var data = JSON.parse(event.data);
    switch (data.action) {
        case OP_UP:
            Reveal.navigateUp();
            break;
        case OP_DOWN:
            Reveal.navigateDown();
            break;
        case OP_LEFT:
            Reveal.navigateLeft();
            break;
        case OP_RIGHT:
            Reveal.navigateRight();
            break;
    }
}
