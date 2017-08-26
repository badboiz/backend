"use strict";
exports.__esModule = true;
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var controller_1 = require("./controller");
var app = express();
// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Utility functions
function hasParameters(query, params) {
    for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
        var param = params_1[_i];
        if (query[param] === undefined) {
            return false;
        }
    }
    return true;
}
// Routing
app.get('/listings', function (req, res) {
    var params = ['lat', 'long'];
    if (hasParameters(req.query, params)) {
        var localListings = controller_1.getLocalListings(req.query.lat, req.query.long);
        res.json(localListings);
    }
    else {
        res.send('One or more of the parameters [' + params.toString() + '] were missing').status(400);
    }
});
app.post('/listings', function (req, res) {
    var params = ['title', 'lat', 'long', 'photo'];
    if (hasParameters(req.body, params)) {
        res.send('Posted your listing');
    }
    else {
        res.send('One or more of the parameters [' + params.toString() + '] were missing').status(400);
    }
});
// Server init
app.listen(process.env.PORT || 3000);
console.log('Running');
