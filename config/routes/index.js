module.exports.routes = {
	'root' : {
		verb : 'get',
 		to : 'Account',
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
 		namespace : {
 			'/overview' : {
 				resources : 'Account'
 			},
 			'/post' : {
 				resources : 'Post'
 			}
 		}
 	}
}
