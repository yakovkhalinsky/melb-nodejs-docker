var request = require('request');

var apiHost = process.env.API_HOST || 'http://localhost';
var apiPort = process.env.API_PORT || 10001;

function getCounterFromApi(cb) {
    var url = apiHost + ':' + apiPort;
    console.log('[APP] GET', url);
    request(url, function(err, res, body) {
        return cb(false, JSON.parse(body));
    });
}

module.exports = function(req, res) {
    getCounterFromApi(function(err, data) {
        var output = [
            '<h1>Hello world!</h1>',
            '<h2>counter: ',
            data.counter,
            '</h2>'
        ];

        res.status(200).send(output.join(''));
        console.log('[APP] counter:', data.counter);
    });
};

