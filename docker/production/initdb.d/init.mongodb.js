const fs = require('fs');

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const dbName = process.env.MONGO_DB_NAME;

db = db.getSiblingDB('admin');

db.createUser({
	user: username,
	pwd: password,
	roles: [{ role: 'dbOwner', db: dbName }],
});

db = db.getSiblingDB(dbName); // mongosh: use dbName

// Beers
db.createCollection('beers');
const beersData = fs.readFileSync('/docker-entrypoint-initdb.d/beers.json');
const beersJson = prepareMongoCompassData(JSON.parse(beersData));
db.beers.insertMany(beersJson);

// Orders
db.createCollection('orders');
const ordersData = fs.readFileSync('/docker-entrypoint-initdb.d/orders.json');
const ordersJson = prepareMongoCompassData(JSON.parse(ordersData));
db.orders.insertMany(ordersJson);

/// Lib

function prepareMongoCompassData(data) {
	return data.map((doc) => {
		if (doc._id && doc._id.$oid) doc._id = new ObjectId(doc._id.$oid);
		return doc;
	});
}
