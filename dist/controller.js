"use strict";
exports.__esModule = true;
var gps = require('gps-util');
function createListing(label, photoUrl, callback) {
}
exports.createListing = createListing;
function checkUsersSurround(userlat, userlong) {
    var new_output_list = [];
    var exisiting_list = [
        {
            lat: -36.752026,
            long: 174.72816999999998
            //constellation
        },
        {
            lat: -36.8442,
            long: 174.7679 //britomart
        },
        {
            lat: -36.8430,
            long: 174.7669 //Auckland ferry
        },
        {
            lat: -36.8433291,
            long: 174.76533859999995 //pwc buidling
        },
        {
            lat: -36.722173,
            long: 174.71267999999998 //Albany station
        }
    ];
    for (var _i = 0, exisiting_list_1 = exisiting_list; _i < exisiting_list_1.length; _i++) {
        var listing = exisiting_list_1[_i];
        var distance = gps.getDistance(userlong, userlat, listing.long, listing.lat);
        if (distance / 1000 < 2) {
            new_output_list.push(listing);
        }
    }
    console.log(new_output_list);
}
exports.checkUsersSurround = checkUsersSurround;
checkUsersSurround(-36.752026, 174.72816999999998); //constellation
