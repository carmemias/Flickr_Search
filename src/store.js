import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		searchTerm: ''
  },
  mutations: {
		SET_SEARCH_TERM(state, newTerm){
			state.searchTerm = newTerm
		}
  },
  actions: {
		set_search_term({commit}, newTerm){
			commit('SET_SEARCH_TERM', newTerm)
		}
  },
	getters: {
		getSearchTerm(state){
			return state.searchTerm
		}
	}
})
