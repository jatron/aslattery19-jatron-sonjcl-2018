// libraries
require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');
const http = require('http');


// local dependencies
const db = require('./db');
const passport = require('./passport');
const views = require('./routes/views');
const api = require('./routes/api');
const socketio = require('./mySocketio')

// initialize express app
const app = express();

// Use middleware that parses urlencoded bodies and json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// configure socketio
const server = http.Server(app);
socketio.socketioListen(server);

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
app.use('/api', api);
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
