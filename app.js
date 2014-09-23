var express = require('express');
var request = require('request');
var http = require('http');

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

app.set('port', process.env.PORT || 3000);
http.createServer(app).listen(app.get('port'), function(){});
