import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const state = {
	userInfo: '',
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
	plugins:[createLogger()]
})