const gps = require('gps-util')
import {createListing, readListings} from './model'

export function makeListing(title, image, lat, long, price,description,userid, callback) {
	createListing(title, image, lat, long, price, description, userid, callback)
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
