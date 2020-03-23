import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		tel:"",
		pas:"/",
		xiangqing:"/"
	},
	mutations:{
		changeUser(state,val){
			state.tel = val
		},
		changepas(state,val){
			state.pas = val
		},
		changxq(state,val){
			state.xiangqing = val
		}
	}
})
