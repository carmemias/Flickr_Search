<template lang="html">
  <div id="photo-grid">
		<SinglePhoto v-for="(photo, index) in photos" :key="index" :photo="photo" />
  </div>
</template>

<script>
import SinglePhoto from './SinglePhoto.vue'

export default {
	name: "photo-grid",
	components: {
		SinglePhoto
	},
	computed: {
		photos(){
			return this.$store.getters.getPhotos
		}
	}
}
</script>

<style lang="css" scoped>
	#photo-grid {
		display: flex;
		flex-wrap: wrap;
		/* height: 60vh;
		overflow-y: scroll; */
	}
</style>
