var express = require('express');

var app = express();
var port = process.env.PORT || 10000;
var helloWorld = require('./helloWorld');

app.get('/', helloWorld);

app.listen(port, function() {
    console.log('Melb Node.js Demo App Listening on', port);
});
