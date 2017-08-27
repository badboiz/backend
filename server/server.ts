const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
import {getLocalListings, getUserListings, makeListing, getSingleListing} from './controller'

const PORT = process.env.PORT || 3000
const app = express()

// Middleware

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Utility functions

function hasParameters(query, params) {
  for(let param of params) {
    if(query[param] === undefined) {
      return false
    }
  }
  return true
}

// Routing



app.get('/test', function(req, res) {
	res.send('Quiky is up!')
})

app.get('/listing', function(req, res) {
	const params = ['id']
	if(hasParameters(req.query, params)) {
		getSingleListing(req.query.id, (listing) => {
			res.json(listing)
		})
	}
})

app.get('/listings', function(req, res) {
	console.log("listings")
	const localParams = ['lat', 'long']
	const userParams = ['user']
	if(hasParameters(req.query, userParams)) {
		console.log("getting user listings")
		getUserListings(req.query.user, (userListings) => {
			console.log(userListings)
			res.json(userListings)
		})
	} else if(hasParameters(req.query, localParams)) {
		getLocalListings(req.query.lat, req.query.long, (localListings) => {
			res.json(localListings)
		})
	} else {
		res.send('One or more of the parameters [' + localParams.toString() + '] were missing').status(400)
	}
})

app.post('/listings', function(req, res) {
	console.log("POST /listings")
	const params = ['title', 'image', 'lat', 'long', 'price', 'description','user']
	if(hasParameters(req.body, params)) {
		makeListing(req.body.title, req.body.image, parseFloat(req.body.lat), parseFloat(req.body.long), parseFloat(req.body.price), req.body.description, req.body.user, () => {
			console.log("model called back")
		})
		res.send('Posted your listing')
	} else {
		res.send('One or more of the parameters [' + params.toString() + '] were missing').status(400)
	}
})

// Server init

app.listen(PORT)
console.log('Running on', PORT)
