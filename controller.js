const gps = require('gps-util');

// export function createListing(label, photoUrl, callback) {
//
// }

export function checkUsersSurround(userlat, userlong){
	var list = [{
		lat: 1,
		long: 3
	}, {
		lat: 2232,
		long: 939
	}, {
		lat: 2000,
		long: 939
	}, {lat: 2500,
		long: 949
	}, {lat: 3000,
		long:1231}
];
for (var listing of list){
	var distance = getDistance(userlong, userlat, listing.long, listing.lat)
	console.log(distance);
}
}
//
// module.exports = {
// 	createListing: createListing,
// 	checkUsersSurround: checkUsersSurround;
// 	};
