var express = require('express');
var request = require('request');

var app = express();

var api_token = "d790c7e9-9a63-2c40-af4c-8c22b7c29594";
app.get('/ping', function(req, res) {
    request.post({
        url: "http://api.justyo.co/yoall/",
        form: {
            "api_token": api_token
        }
    }, function(err, res, body) { });
});

var server = app.listen(3000, function() {
    console.log("listening on port %d", server.address().port);
});
