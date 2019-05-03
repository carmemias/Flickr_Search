<template lang="html">
  <form id="search-form" v-on:submit="search">
		<label for="term-field">What photos would you like to see?</label>
		<input id="term-field" type="text" v-model="searchTerm" />
		<button type="submit">Search</button>
	</form>
</template>

<script>
export default {
	name: "search-form",
	data(){
		return {
			searchTerm: ''
		}
	},
	methods: {
		search(event){
			event.preventDefault()
			//save term to state store
			this.$store.dispatch('set_search_term', this.searchTerm)

			//fetch data from API
			const fetchUrl = this.buildUrl()
			this.axios.get(fetchUrl)
			.then(res => {
				//save results to store
				this.$store.dispatch('add_fetched_photos', res.data.photos.photo)
				this.$store.dispatch('set_current_page', res.data.photos.page)
				this.$store.dispatch('set_page_count', res.data.photos.pages)
				this.$store.dispatch('set_results_count', res.data.photos.total)
				this.$store.dispatch('set_results_status', res.data.stat)
			})
		},
		buildUrl(){
			// https://api.flickr.com/services/rest/?method={method}&api_key={api_key}&text={text_to_search}&media={media_type}&extras={comma_separated_codes_for_extras}&format={response_format}
			const url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=fd1eff819bf82540142ac1ba867ee7e9&text=' + this.searchTerm + '&media=photos&extras=owner_name&format=json&nojsoncallback=1'
			return url
		}
	}
}
</script>

<style lang="css" scoped>
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 20px;
		background-color: #efefef;
	}

	input[type="text"] {
		margin: 10px 0;
		width: 300px;
		padding: 5px;
	}

	button {
		padding: 7px 30px;
		font-size: 1em;
	}
</style>
