var mongodb = require('./db');
var User = require('./../model/user');

/**
 * 数据库测试类
 * @param  {[type]} err      [description]
 * @param  {[type]} db){	if (err)         {		return callBack(err);	}	db.collection('cok',function(err,colleciton) {		if (err) {			mongodb.close();			console.log(err);			return callBack(err);		}         colleciton.findOne(function(err,doc){         	console.log(doc);         	console.log("_-------------------------");         	mongodb.close();         })	})} [description]
 * @return {[type]}          [description]
 */
// mongodb.open(function(err,db){
// 	if (err) {
// 		// return callBack(err);
// 	}

// 	db.collection('cok',function(err,collection) {
// 		if (err) {
// 			mongodb.close();
// 			console.log(err);
// 			// return callBack(err);
// 		}
//          colleciton.findOne(function(err,doc){
//          	// console.log(doc);
//          	// console.log("_-------------------------");
//          	mongodb.close();
//          })

// 	})
// })

var  newUser = new User({
	name:"zhgeewan",
	title:"heyeweie"
});

User.get("zhgean",function(err,user){
	console.log(user)
	newUser.save(function(err,user){
		console.log(user);
	})
});

	
