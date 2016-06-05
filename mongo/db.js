var setting = require('./setting');
var mongodb = require('mongodb'),
	Connection = require('mongodb').Connection;

var server = new require('mongodb').Server('localhost', 27017, {auto_reconnect:true});
module.exports = new mongodb.Db('goofyy', server, {safe:true});

// module.exports = new Db(connection.db,new ServerG(setting.host, Connection.DEFAULT_PORT,{safe:true});