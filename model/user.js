var mongodb = require("./../mongo/db");

function User(user) {
	this.userName = user.userName;
	this.passWord = user.passWord;
	this.email = user.email;
}

module.exports = User;

User.prototype.save = function(callback) {
	var user = {
		userName:this.userName,
		passWord:this.passWord,
		email:this.email
	};

	mongodb.open(function(err,db){
		if (err) {
			return callback(err);
		}
		db.collection('cok',function(err,collection) {
			if (err) {
				mongodb.close();
				return callback(err);
				
			}
			collection.insert(user,{
				safe:true
			},function(err,user){
				mongodb.close();
				if (err) {
					// mongodb.close();
					return  callback(err);
				}
				callback(null,user);

			})
		})
	})
}

User.get = function(name,callback) {
	mongodb.open(function(err,db) {
		if (err) {
			callback(err);
		}
		db.collection('cok',function(err,colleciotn){
			if (err) {
				mongodb.close();
				return callback(err);
			}
			colleciotn.findOne({userName:name},function(err,user){
				mongodb.close();
				if (err) {
					return callback(err);
				}
				return callback(null,user);
			})
		}) 
	})
}