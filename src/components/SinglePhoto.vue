<template lang="html">
  <img :src="srcUrl()" :alt="altText()" />
</template>

<script>
export default {
	name: "single-photo",
	props: ['photo'],
	methods: {
		srcUrl(){
			//https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
			return 'https://farm' + this.photo.farm + '.staticflickr.com/' + this.photo.server + '/' + this.photo.id + '_' + this.photo.secret + '_m.jpg'
		},
		altText(){
			return "some text here"
		}
	}
}
</script>

<style lang="css" scoped>
	img {
		margin: 3px;
	}
</style>
