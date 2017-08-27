const fs = require('fs')
const path = require('path')
var mongodb = require('mongodb')
var MongoClient = mongodb.MongoClient
import {getTimeStamp} from './controller';

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

export function createListing(title : string, image : string, lat : number, long : number, price: number, description: string, user: String, created:number, callback: Function) {
	connect((db) => {
		let data = {
			title: title,
			image: image,
			lat: lat,
			long: long,
			price: price,
			description: description,
			user: user,
			created: created
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

export function readUserListings(user, callback) {
	connect((db) => {
		db.collection(LISTINGS_COLLECTION).find({user: user}).toArray((err, docs) => {
			callback(docs)
		})
	})
}


export function readSingleListing(id, callback) {
	connect((db) => {
		db.collection(LISTINGS_COLLECTION).find({"_id": mongodb.ObjectId(id)}).toArray((err, docs) => {
			callback(docs)
		})
	})
}

// export function deleteExpiredSession(callback : Function) {
// 	var deadline = getTimeStamp() - 3600;
// 	connect(function(db) {
// 	  db.collection(LISTINGS_COLLECTION).remove({ created: {$lt: deadline}}, function(err, docs) {
// 	    callback(docs)
// 	        })
//
// 	 })
// 	}
