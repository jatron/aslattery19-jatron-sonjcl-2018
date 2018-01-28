// libraries
const http = require('http');
const express = require('express');

var app;
var httpServer;

module.exports = {
    initialize      : function() {
        app = express();
        httpServer = http.Server(app);
    },
    httpServer      : httpServer,
    app             : app
}
