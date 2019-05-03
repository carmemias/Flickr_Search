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
		CLEAR_SEARCH_TERM(state){
			state.searchTerm = ''
		},
		SET_RESULTS_STATUS(state, newStatus){
			state.searchResultsMeta.status = newStatus
		},
		CLEAR_RESULTS_STATUS(state){
			state.searchResultsMeta.status = ''
		},
		SET_RESULTS_COUNT(state, newPhotosCount){
			state.searchResultsMeta.photosTotalCount += parseInt(newPhotosCount, 10)
		},
		CLEAR_RESULTS_COUNT(state){
			state.searchResultsMeta.photosTotalCount = null
		},
		SET_CURRENT_PAGE(state, newCurrentPage){
			state.searchResultsMeta.currentPage = newCurrentPage
		},
		CLEAR_CURRENT_PAGE(state){
			state.searchResultsMeta.currentPage = null
		},
		SET_PAGE_COUNT(state, newTotalPages){
			state.searchResultsMeta.pagesTotalCount = newTotalPages
		},
		CLEAR_PAGE_COUNT(state){
			state.searchResultsMeta.pagesTotalCount = null
		},
		ADD_FETCHED_PHOTOS(state, newFetchedPhotos){
			state.fetchedPhotos.push(...newFetchedPhotos)
		},
		CLEAR_FETCHED_PHOTOS(state){
			state.fetchedPhotos = []
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
		clear_search_term({commit}){
			commit('CLEAR_SEARCH_TERM')
		},
		set_results_status({commit}, newStatus){
			commit('SET_RESULTS_STATUS', newStatus)
		},
		clear_results_status({commit}){
			commit('CLEAR_RESULTS_STATUS')
		},
		set_results_count({commit}, newPhotosCount){
			commit('SET_RESULTS_COUNT', newPhotosCount)
		},
		clear_results_count({commit}){
			commit('CLEAR_RESULTS_COUNT')
		},
		set_current_page({commit}, newCurrentPage){
			commit('SET_CURRENT_PAGE', newCurrentPage)
		},
		clear_current_page({commit}){
			commit('CLEAR_CURRENT_PAGE')
		},
		set_page_count({commit}, newTotalPages){
			commit('SET_PAGE_COUNT', newTotalPages)
		},
		clear_page_count({commit}){
			commit('CLEAR_PAGE_COUNT')
		},
		add_fetched_photos({commit}, newFetchedPhotos){
			commit('ADD_FETCHED_PHOTOS', newFetchedPhotos)
		},
		clear_fetched_photos({commit}){
			commit('CLEAR_FETCHED_PHOTOS')
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
