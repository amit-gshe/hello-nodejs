var MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

module.exports.init = function (callback) {
    const url = 'mongodb://localhost:27017';
    const dbName = 'test';
    var options = {
        useNewUrlParser: true
    };
    MongoClient.connect(url, options, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        module.exports.inventory = client.db(dbName).collection('inventory');
        callback(err);
    });
};