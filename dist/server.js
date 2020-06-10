"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
var twitch_1 = require("./twitch");
var express = require('express');
var bodyParser = require('body-parser');
function startServer(win) {
    var app = express();
    var port = 3000;
    app.use(bodyParser.json());
    app.get('/', function (req, res) {
        return res.send('Hello World!');
    });
    var follow = app.route('/follow');
    follow.get(function (req, res) {
        console.log('subscription verification');
        res.send(req.query['hub.challenge']);
        res.status(200).end();
    });
    follow.post(function (req, res) {
        twitch_1.followAlert(req.body.data[0].from_name, win);
        res.status(200).end();
    });
    app.listen(port, function () { return console.log("Example app listening at http://localhost:" + port); });
}
exports.startServer = startServer;
