"use strict";
exports.__esModule = true;
var gps = require('gps-util');
function createListing(label, photoUrl, callback) {
}
exports.createListing = createListing;
function checkUsersSurround(userLat, userLong) {
    var localListings = [];
    var allListings = [{
            lat: -36.752026,
            long: 174.72816999999998,
            title: "Constellation"
        }, {
            lat: -36.8442,
            long: 174.7679,
            title: "Britomart"
        }, {
            lat: -36.8430,
            long: 174.7669,
            title: "Auckland ferry"
        }, {
            lat: -36.8433291,
            long: 174.76533859999995,
            title: "PWC buidling"
        }, {
            lat: -36.722173,
            long: 174.71267999999998,
            title: "Albany station"
        }];
    for (var _i = 0, allListings_1 = allListings; _i < allListings_1.length; _i++) {
        var listing = allListings_1[_i];
        var distance = gps.getDistance(userLong, userLat, listing.long, listing.lat);
        if (distance / 1000 < 2) {
            localListings.push(listing);
        }
    }
    return localListings;
}
exports.checkUsersSurround = checkUsersSurround;
//console.log(checkUsersSurround(-36.752026, 174.72816999999998)) //constellation
