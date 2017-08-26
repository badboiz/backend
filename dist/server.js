var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
function hasParameters(query, params) {
    for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
        var param = params_1[_i];
        if (query[param] === undefined) {
            return false;
        }
    }
    return true;
}
app.get('/api/test', function (req, res) {
    res.json(JSON.stringify({
        error: false
    }));
});
app.get('/listings', function (req, res) {
    var params = ['lat', 'long'];
    if (hasParameters(req.query, params)) {
        var listings = [];
        // TODO Get local listings
        res.json(listings);
    }
    else {
        res.send('One or more of the parameters [' + params.toString() + '] were missing').status(400);
    }
});
app.post('/listings', function (req, res) {
    var params = ['title', 'photo'];
    if (hasParameters(req.body, params)) {
        res.send('Posted your listing');
    }
    else {
        res.send('One or more of the parameters [' + params.toString() + '] were missing').status(400);
    }
});
app.listen(process.env.PORT || 3000);
console.log('Running');
