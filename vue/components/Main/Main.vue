<template>
	<div id="main">
		<top-menu :content-mode="ContentMode" :left-menu-selected="LeftMenuSelected" :set-left-menu-selected="SetLeftMenuSelected"></top-menu>
		<left-menu :content-mode="ContentMode" :left-menu-selected="LeftMenuSelected" :set-left-menu-selected="SetLeftMenuSelected"></left-menu>	
		<main-content :content-mode="ContentMode" :left-menu-selected="LeftMenuSelected" :set-left-menu-selected="SetLeftMenuSelected"></main-content>
	</div>
</template>

<script>
	import TopMenu from './TopMenu'
	import LeftMenu from './LeftMenu'
	import MainContent from './Content'

	export default {
		props: {
	
		},
		data: function() {
			return {
				LeftMenuSelected: 'home',
				SetLeftMenuSelected: function(val) {
					this.LeftMenuSelected = val;
				}.bind(this),
				ContentMode: undefined,
			}
		},
		ready: function() {
			//this.ContentMode = this.LeftMenuSelected;
		},
		created: function() {
			this.ContentMode = this.LeftMenuSelected;
		},
		computed: {
	
		},
		watch: {
			LeftMenuSelected: function() {
				if (!this.LeftMenuSelected) return;
				this.ContentMode = this.LeftMenuSelected;
			}
		},
		methods: {
			RandomHash: function() {
				var text = "";
				var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
				for (var i = 0; i < 5; i++)
					text += possible.charAt(Math.floor(Math.random() * possible.length));
				return text;
			},
		},
		components: {
			TopMenu,
			LeftMenu,
			MainContent,
		}
	}
</script>
