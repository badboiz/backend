const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

function hasParameters(query, params) {
  for(let param of params) {
    if(query[param] === undefined) {
      return false
    }
  }
  return true
}


app.get('/api/test', function(req, res) {
	res.json(JSON.stringify({
		error: false
	}))
})

app.get('/listings', function(req, res) {
	const params = ['lat', 'long']
	if(hasParameters(req.query, params)) {
		let listings = []
		// TODO Get local listings
		res.json(listings)
	} else {
		res.send('One or more of the parameters [' + params.toString() + '] were missing').status(400)
	}
	
})

app.post('/listings', function(req, res) {
	const params = ['title', 'photo']
	if(hasParameters(req.body, params)) {
		res.send('Posted your listing')
	} else {
		res.send('One or more of the parameters [' + params.toString() + '] were missing').status(400)
	}
})

app.listen(process.env.PORT || 3000)
console.log('Running')
