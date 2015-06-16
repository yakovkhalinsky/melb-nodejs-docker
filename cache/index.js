var express = require('express');

var app = express();
var port = process.env.PORT || 10001;

var counter = 0;

app.get('/', function(req, res) {
    counter++;
    console.log('[CACHE] counter:', counter);
    res.status(200).json({counter: counter});
});

app.listen(port, function() {
    console.log('Melb Node.js Demo Cache Listening on', port);
});
