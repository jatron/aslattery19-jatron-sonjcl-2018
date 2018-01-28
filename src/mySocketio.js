// dependencies
const socketio = require('socket.io');

const server = require('./server');

module.exports.socketioListen = function() {
    const io = socketio(server.httpServer);
    io.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            io.emit('chat message', msg);
        });
    });
};
