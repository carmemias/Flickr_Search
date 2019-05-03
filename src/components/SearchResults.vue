<template lang="html">
	<section id="search-result" v-if="searchTerm">
		<h2>Your Search Results for: {{ searchTerm }}</h2>

	</section>

</template>

<script>
export default {
	name: "search-results",
	computed:{
		searchTerm(){
			return this.$store.getters.getSearchTerm
		}
	}
}
</script>

<style lang="css" scoped>
</style>
