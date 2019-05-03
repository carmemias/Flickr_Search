<template>
	<div id="app">
		<h1>Flickr Search</h1>
		<SearchForm/>
		<SearchResults/>
	</div>
</template>

<script>
import SearchForm from './components/SearchForm.vue'
import SearchResults from './components/SearchResults.vue'

export default {
	name: 'app',
	components: {
		SearchForm,
		SearchResults
	},
	mounted(){
		this.scroll()
	},
	methods: {
		scroll(){
			window.onscroll = () => {
				let bottomOfWindow = Math.ceil(document.documentElement.scrollTop) + window.innerHeight === document.documentElement.offsetHeight;

				if (bottomOfWindow) {
					const currentPage = this.getCurrentPage()
					const totalPages = this.getTotalPages()

					if(currentPage < totalPages){
						this.fetchNextPage()
					} else {
						this.$store.dispatch('set_message', 'There are no more photos to show.')
					}

				}
			}
		},
		fetchNextPage(){
			/* eslint-disable */
			console.log("fetch next page");
			/* eslint-enable */
		},
		getCurrentPage(){
			return this.$store.getters.getCurrentPage
		},
		getTotalPages(){
			return this.$store.getters.getTotalPages
		}
	}
}
</script>

<style>
	#app {
		width: 80vw;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin: 60px auto;
		padding: 0;
	}
</style>
