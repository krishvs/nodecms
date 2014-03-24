module.exports.routes = {
	'root' : {
		verb : 'get',
 		to : 'dashboard',
 		action : 'index'
	},
	'/home' : {
		verb : 'get',
 		to : 'Home',
 		action : 'index'
	},
	'/account' : {
		resources : 'Account'
	},
	'/login' : {
 		resources : 'login'
 	},
	'/user' : {
		resources : 'User'
	 },
 	'/signup' : {
		verb : 'get',
		to : 'Login',
		action : 'new'
 	},
 	'/logout' : {
 		verb : 'get',
 		to : 'Login',
 		addToPath : '',
 		action : 'logout'
 	},
 	'/dashboard' : {
 		resources : 'dashboard',
 		nested : {
 			'/whats' : {
 				resources : 'Login'
 			}
 		}
 	},
 	'/post' :{
 		resources : 'Post'
 	}
}
