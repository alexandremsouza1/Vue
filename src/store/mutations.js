import * as type  from './mutation-types.js'

export default {
	[type.ADD_USER](state,user){
		state.userInfo = user
	}
}	