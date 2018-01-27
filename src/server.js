// libraries
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const httpServer = http.Server(app);

module.exports = {
    httpServer      : httpServer,
    app             : app,
    ioListen        : function() {
        const io = socketio(httpServer);
        io.on('connection', function(socket) {
            socket.on('chat message', function(msg) {
                io.emit('chat message', msg);
            });
        });
    }
}
