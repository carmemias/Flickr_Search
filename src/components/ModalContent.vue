<template lang="html">
	<transition name="modal">
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">

					<div class="modal-header">
						<slot name="header">
							<button class="modal-default-button" role="button" tabindex="0" v-on:click="closeModal" v-on:keyup.enter="closeModal">x</button>
							<h3>{{ photo.title }}</h3>
						</slot>
					</div>

					<div class="modal-body">
						<slot name="body">
							<img :id="photo.id" :src="srcUrl()" :alt="altText()" />
						</slot>
					</div>

					<div class="modal-footer">
						<slot name="footer">
							<p>By {{ photo.ownername }}</p>
						</slot>
					</div>

				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'modal-content',
	props: ['photo'],
	methods: {
		srcUrl(){
			//https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
			return 'https://farm' + this.photo.farm + '.staticflickr.com/' + this.photo.server + '/' + this.photo.id + '_' + this.photo.secret + '_b.jpg'
		},
		altText(){
			return this.photo.title
		},
		closeModal(){
			this.$store.dispatch('clear_show_modal');
		}
	}
}
</script>

<style lang="css" scoped>
	.modal-mask {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, .5);
	display: table;
	transition: opacity .3s ease;
}

.modal-wrapper {
	display: table-cell;
	vertical-align: middle;
}

.modal-container {
	width: 90vw;
	margin: 0px auto;
	padding: 20px 30px;
	background-color: #fff;
	border-radius: 2px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
	transition: all .3s ease;
	font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
	margin-top: 0;
	text-transform: uppercase;
}

.modal-body {
	margin: 20px 0;
	text-align: left;
	line-height: 1.5;
}

hr {
	margin: 10px 0;
	border: 1px solid #eee;
}

.modal-default-button {
	float: right;
	color: #000;
	line-height: 1;
	padding: 0 4px 1px 4px;
	border: 1px solid #000;
	border-radius: 50px;
	background-color: #fff;
	transition: all 400ms ease;
}

.modal-default-button:hover {
	color: #fff;
	background-color: #000;
	cursor: pointer;
}

.follow-btn {
	width: 100%;
	padding: 10px 20px;
	margin-top: 10px;
	color: #000;
	background-color: #eee;
	transition: all 400ms ease;
}
.follow-btn:hover {
	color: #eee;
	background-color: #000;
}
/*
* The following styles are auto-applied to elements with
* transition="modal" when their visibility is toggled
* by Vue.js.
*
* You can easily play with the modal transition by editing
* these styles.
*/

.modal-enter {
	opacity: 0;
}

.modal-leave-active {
	opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}
</style>
