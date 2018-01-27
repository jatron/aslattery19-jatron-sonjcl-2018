// libraries
const http = require('http');
const express = require('express');

const app = express();
const httpServer = http.Server(app);

module.exports = {
    httpServer      : httpServer,
    app             : app
}
