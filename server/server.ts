const express = require('express')

const app = express()

app.get('/api/test', function(req, res) {
	res.json(JSON.stringify({
		error: false
	}))
})

app.listen(process.env.PORT || 3000)
console.log('Running')


var getLatLong = () =>{
		lat:lat,
		long:long
	}, (error, response, body)=>{
		if (!error && response.statusCode ==200){
			controller.checkUsersSurround(lat,long);
		} else{
			console.log('Unable to fetch lat, long');
	}
	})
}
