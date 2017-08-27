const gps = require('gps-util')
<<<<<<< HEAD
import {createListing, readListings, readUserListings,deleteExpiredSession} from './model'
=======
import {createListing, readListings, readUserListings, readSingleListing} from './model'
>>>>>>> d42080dd1b4cda26c2a060e36f0a3b0e09b9e494

export function makeListing(title, image, lat, long, price,description,userid, callback) {
	let created = getTimeStamp()
	createListing(title, image, lat, long, price, description, userid, created, callback)
}

export function getLocalListings(userLat, userLong, callback) {
	let localListings = []
	readListings((allListings) => {
		for(let listing of allListings) {
			let distance = gps.getDistance(userLong, userLat, listing.long, listing.lat)
			if(distance / 1000 < 2 ) {
				localListings.push(listing)
			}
		}
		callback(localListings)
	})
}

export function getUserListings(user, callback) {
	readUserListings(user, callback)
}

export function getSingleListing(id, callback) {
	readSingleListing(id, callback)
}

export function getTimeStamp() {
	var time = Math.round(Date.now() / 1000);
	return time;
}
//
// deleteExpiredSession(function(docs) {
// 	console.log(docs);
// })
