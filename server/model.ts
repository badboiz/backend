const fs = require('fs')
const path = require('path')
var mongodb = require('mongodb')
var MongoClient = mongodb.MongoClient

const DB_CONFIG_PATH = path.join(__dirname, '../db.config')

if(fs.existsSync(DB_CONFIG_PATH)) {
	process.env.MONGO = fs.readFileSync(path.join(__dirname, '../db.config'), 'utf8')
}

const connectionUrl = process.env.MONGO
//const connectionUrl = fs.readFileSync(path.join(__dirname, '../db.config'), 'utf8')

const LISTINGS_COLLECTION = 'listings'

function connect(success : Function, failure : Function = function(){}) {
  MongoClient.connect(connectionUrl, function(err, db) {
    if(err) {
      failure(err)
    } else {
      success(db)
      db.close()
    }
  })
}

export function createListing(title : string, image : string, lat : number, long : number, price: number, description: string, user: String, callback: Function) {
	connect((db) => {
		let data = {
			title: title,
			image: image,
			lat: lat,
			long: long,
			price: price,
			description: description,
			user: user
		}
		db.collection(LISTINGS_COLLECTION).insert(data, (err, docs) => {
			callback(docs)
		})
	})
}

export function readListings(callback) {
	connect((db) => {
		db.collection(LISTINGS_COLLECTION).find({}).toArray((err, docs) => {
			callback(docs)
		})
	})
}
