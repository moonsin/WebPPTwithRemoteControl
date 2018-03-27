var CONTROLLER = 0;

var ws = require(__dirname + '/lib/ws/server');
var server = ws.createServer();

server.addListener('connection', function(conn) {
    console.log(conn.id + ' has connected to the server');

    conn.addListener('message', function(msg) {
        var data = JSON.parse(msg);

        if (data.sender === CONTROLLER) {
            var command = {};
            command.action = data.action;

            server.broadcast(JSON.stringify(command));
        }
    });
});

server.listen(3000);
console.log('server listening on 3000');
