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
			//fetch data from API
			const fetchUrl = this.buildUrl()
			this.axios.get(fetchUrl)
			.then(res => {
				//add results to store
				this.$store.dispatch('add_fetched_photos', res.data.photos.photo)
				this.$store.dispatch('set_results_status', res.data.stat)
				this.$store.dispatch('set_current_page', res.data.photos.page)

			})
		},
		buildUrl(){
			const searchTerm = this.$store.getters.getSearchTerm
			const pageToFetch = this.getCurrentPage() + 1

			// https://api.flickr.com/services/rest/?method={method}&api_key={api_key}&text={text_to_search}&page={page_number}media={media_type}&extras={comma_separated_codes_for_extras}&format={response_format}
			const url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=fd1eff819bf82540142ac1ba867ee7e9&text=' + searchTerm + '&page=' + pageToFetch + '&media=photos&extras=owner_name&format=json&nojsoncallback=1'
			return url
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
