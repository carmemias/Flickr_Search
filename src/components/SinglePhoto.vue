<template lang="html">
	<div class="photo">
		<img :id="photo.id" :src="srcUrl()" :alt="altText()" v-on:click="openModal"/>
		<ModalContent :photo="photo" v-if="showThisModal"/>
	</div>
</template>

<script>
import ModalContent from './ModalContent.vue'

export default {
	name: 'single-photo',
	props: ['photo'],
	components: {
		ModalContent
	},
	computed: {
		showThisModal(){
			const showModal = this.$store.getters.getShowModal
			return showModal === this.photo.id
		}
	},
	methods: {
		srcUrl(){
			//https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
			return 'https://farm' + this.photo.farm + '.staticflickr.com/' + this.photo.server + '/' + this.photo.id + '_' + this.photo.secret + '_m.jpg'
		},
		altText(){
			return this.photo.title
		},
		openModal(){
			this.$store.dispatch('set_show_modal', this.photo.id);
		}
	}
}
</script>

<style lang="css" scoped>
	img {
		margin: 3px;
	}
	.photo:hover {
		cursor: pointer;
	}
</style>
