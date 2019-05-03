import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		searchTerm: '',
		searchResults: []
  },
  mutations: {
		SET_SEARCH_TERM(state, newTerm){
			state.searchTerm = newTerm
		},
		SET_SEARCH_RESULTS(state, newResults){
			state.searchResults = newResults
		}
  },
  actions: {
		set_search_term({commit}, newTerm){
			commit('SET_SEARCH_TERM', newTerm)
		},
		set_search_results({commit}, newResults){
			commit('SET_SEARCH_RESULTS', newResults)
		}
  },
	getters: {
		getSearchTerm: (state) => {
			return state.searchTerm
		},
		getSearchResults: (state) => {
			return state.searchResults
		}
	}
})
