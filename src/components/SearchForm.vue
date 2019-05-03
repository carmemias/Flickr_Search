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
			this.$store.dispatch('set_search_term', this.searchTerm)
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
