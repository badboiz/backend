const express = require('express')

const app = express()

app.get('/api/test', function(req, res) {
	res.json(JSON.stringify({
		error: false
	}))
})

app.listen(3000)
console.log('Running')
