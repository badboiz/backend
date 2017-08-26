const gps = require('gps-util');

export function createListing(label, photoUrl, callback) {

}

export function checkUsersSurround(userlat, userlong) {
	var new_output_list = [];
	var exisiting_list = [
			{
				lat: -36.752026,
				long: 174.72816999999998
			 											//constellation
			},
			{
				lat: -36.8442,
				long: 174.7679     //britomart
			},
			{
				lat: -36.8430,
				long: 174.7669   //Auckland ferry
			},
			{
			lat: -36.8433291,
			long: 174.76533859999995  //pwc buidling
			},
			{
			lat: -36.722173,
			long:174.71267999999998  //Albany station
			}
			];
for (var listing of exisiting_list){
	var distance = gps.getDistance(userlong, userlat, listing.long, listing.lat)
	if (distance/1000 < 4 ){
		new_output_list.push(listing);
	}
}

console.log(new_output_list);
}

checkUsersSurround(-36.752026, 174.72816999999998)  //constellation
