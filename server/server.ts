const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
import {checkUsersSurround} from './controller'

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

app.get('/listings', function(req, res) {
	const params = ['lat', 'long']
	if(hasParameters(req.query, params)) {
		let localListings = checkUsersSurround(req.query.lat, req.query.long)
		res.json(localListings)
	} else {
		res.send('One or more of the parameters [' + params.toString() + '] were missing').status(400)
	}
	
})

app.post('/listings', function(req, res) {
	const params = ['title', 'lat', 'long', 'photo']
	if(hasParameters(req.body, params)) {
		res.send('Posted your listing')
	} else {
		res.send('One or more of the parameters [' + params.toString() + '] were missing').status(400)
	}
})

// Server init

app.listen(process.env.PORT || 3000)
console.log('Running')
