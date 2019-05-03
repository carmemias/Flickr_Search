import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		searchTerm: '',
		searchResultsMeta: {
			status: '',
			photosTotalCount: null,
			currentPage: null,
			pagesTotalCount: null
		},
		fetchedPhotos: [],
		message: ''
  },
  mutations: {
		SET_SEARCH_TERM(state, newTerm){
			state.searchTerm = newTerm
		},
		SET_RESULTS_STATUS(state, newStatus){
			state.searchResultsMeta.status = newStatus
		},
		SET_RESULTS_COUNT(state, newPhotosCount){
			state.searchResultsMeta.photosTotalCount += parseInt(newPhotosCount, 10)
		},
		SET_CURRENT_PAGE(state, newCurrentPage){
			state.searchResultsMeta.currentPage = newCurrentPage
		},
		SET_PAGE_COUNT(state, newTotalPages){
			state.searchResultsMeta.pagesTotalCount = newTotalPages
		},
		ADD_FETCHED_PHOTOS(state, newFetchedPhotos){
			state.fetchedPhotos.push(...newFetchedPhotos)
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
		set_results_status({commit}, newStatus){
			commit('SET_RESULTS_STATUS', newStatus)
		},
		set_results_count({commit}, newPhotosCount){
			commit('SET_RESULTS_COUNT', newPhotosCount)
		},
		set_current_page({commit}, newCurrentPage){
			commit('SET_CURRENT_PAGE', newCurrentPage)
		},
		set_page_count({commit}, newTotalPages){
			commit('SET_PAGE_COUNT', newTotalPages)
		},
		add_fetched_photos({commit}, newFetchedPhotos){
			commit('ADD_FETCHED_PHOTOS', newFetchedPhotos)
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
			return state.searchResultsMeta.status
		},
		getPhotos: (state) => {
			return state.fetchedPhotos
		},
		getResultsCount: (state) => {
			return state.searchResultsMeta.photosTotalCount
		},
		getCurrentPage: (state) => {
			return state.searchResultsMeta.currentPage
		},
		getTotalPages: (state) => {
			return state.searchResultsMeta.pagesTotalCount
		},
		getMessage: (state) => {
			return state.message
		}
	}
})
