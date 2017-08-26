const express = require('express')

const app = express()

app.get('/api/test', function(req, res) {
	res.json(JSON.stringify({
		error: false
	}))
})

app.get('/listings', function(req, res) {
	let listings = []
	// TODO Get local listings
	res.json(JSON.stringify(listings))
})

app.listen(process.env.PORT || 3000)
console.log('Running')
