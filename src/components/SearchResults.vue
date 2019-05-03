<template lang="html">
	<section id="search-result" v-if="searchTerm">
		<h2>Your Search Results for: {{ searchTerm }}</h2>

		<div id="results-meta">
			<p>Found {{ totalResults }} photos.</p>
			<p>Currently showing page {{ currentPage }} of {{ totalPages }} pages.</p>
		</div>

		<PhotoGrid />

	</section>

</template>

<script>
import PhotoGrid from './PhotoGrid.vue'

export default {
	name: "search-results",
	components: {
		PhotoGrid
	},
	computed:{
		searchTerm(){
			return this.$store.getters.getSearchTerm
		},
		totalResults(){
			return this.$store.getters.getResultsCount
		},
		currentPage(){
			return this.$store.getters.getCurrentPage
		},
		totalPages(){
			return this.$store.getters.getTotalPages
		}
	}
}
</script>

<style lang="css" scoped>
</style>
