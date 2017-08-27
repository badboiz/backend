const gps = require('gps-util')
import {createListing, readListings, readUserListings} from './model'

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

export function getTimeStamp() {
	var time = Math.round(Date.now() / 1000);
	return time;
}
