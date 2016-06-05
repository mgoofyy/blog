/**
 * 路由管理类
 * @type {[type]}
 */
var routes = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var signup = require('./routes/signUp');

/**
 * 管理路由
 * @param  {app} app [description]
 * @return {[type]}     [description]
 */
module.exports = function(app) {

	app.use('/', routes);
	app.use('/users', users);
	app.use('/login',login);
	app.use('/sign',signup);
	
}