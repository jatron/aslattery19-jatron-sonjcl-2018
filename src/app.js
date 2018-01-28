// libraries
require('dotenv').config();
const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');
const socketio = require('socket.io');


// local dependencies
const db = require('./db');
const passport = require('./passport');
const views = require('./routes/views');
const api = require('./routes/api');

// initialize express app
const app = express();

// Use middleware that parses urlencoded bodies and json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// // configure socketio
const server = http.Server(app);
const io = socketio(server);
io.on('connection', function(socket){
    // // when the client emits 'adduser', this listens and executes
    // socket.on('adduser', function(username){
    //     // store the username in the socket session for this client
    //     socket.username = username;
    //     // store the room name in the socket session for this client
    //     socket.room = 'room1';
    //     // add the client's username to the global list
    //     usernames[username] = username;
    //     // send client to room 1
    //     socket.join('room1');
    //     // echo to client they've connected
    //     socket.emit('updatechat', 'SERVER', 'you have connected to room1');
    //     // echo to room 1 that a person has connected to their room
    //     socket.broadcast.to('room1').emit('updatechat', 'SERVER', username + ' has connected to this room');
    //     socket.emit('updaterooms', rooms, 'room1');
    //});



  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});


// set up sessions
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: 'false',
    saveUninitialized: 'true'
}));

// hook up passport
app.use(passport.initialize());
app.use(passport.session());

// authentication routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', passport.authenticate('google',{ failureRedirect: '/' }),
    function(req, res) {
        res.redirect('/meal_match?' + req.user._id);
});

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

// set routes
app.use('/', views);
app.use('/api', api );
app.use('/static', express.static('public'));

// 404 route
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// route error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        status: err.status,
        message: err.message,
    });
});

// port config
const port = process.env.PORT || 3000; // config variable
server.listen(port, function() {
    console.log('Server running on port: ' + port);
});
