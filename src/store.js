import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		searchTerm: '',
		searchResults: null,
		message: ''
  },
  mutations: {
		SET_SEARCH_TERM(state, newTerm){
			state.searchTerm = newTerm
		},
		SET_SEARCH_RESULTS(state, newResults){
			state.searchResults = newResults
		},
		SET_MESSAGE(state, newMessage){
			state.message = newMessage
		},
		CLEAR_MESSAGE(state){
			state.message = ''
		}
  },
  actions: {
		set_search_term({commit}, newTerm){
			commit('SET_SEARCH_TERM', newTerm)
		},
		set_search_results({commit}, newResults){
			commit('SET_SEARCH_RESULTS', newResults)
		},
		set_message({commit}, newMessage){
			commit('SET_MESSAGE', newMessage)
		},
		clear_message({commit}){
			commit('CLEAR_MESSAGE')
		}
  },
	getters: {
		getSearchTerm: (state) => {
			return state.searchTerm
		},
		getResultStatus: (state) => {
			return state.searchResults ? state.searchResults.stat : ''
		},
		getPhotos: (state) => {
			return state.searchResults ? state.searchResults.photos.photo : []
		},
		getResultsCount: (state) => {
			return state.searchResults ? state.searchResults.photos.total : null
		},
		getCurrentPage: (state) => {
			return state.searchResults ? state.searchResults.photos.page : null
		},
		getTotalPages: (state) => {
			return state.searchResults ? state.searchResults.photos.pages : null
		},
		getMessage: (state) => {
			return state.message
		}
	}
})
