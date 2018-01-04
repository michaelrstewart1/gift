<template>
	<div id="main">
		<top-menu :content-mode="ContentMode" :left-menu-selected="LeftMenuSelected" :set-left-menu-selected="SetLeftMenuSelected" v-if="1==2"></top-menu>
		<left-menu :content-mode="ContentMode" :left-menu-selected="LeftMenuSelected" :set-left-menu-selected="SetLeftMenuSelected" v-if="1==2"></left-menu>	
		<main-content :content-mode="ContentMode" :left-menu-selected="LeftMenuSelected" :set-left-menu-selected="SetLeftMenuSelected" v-if="1==2"></main-content>
		<landing v-if="1==1"></landing>
		<signup v-if="1==2"></signup>
		<signin v-if="1==2"></signin>
	</div>
</template>

<script>
	import TopMenu from './TopMenu'
	import LeftMenu from './LeftMenu'
	import MainContent from './Content'
	import Landing from './Landing'
	import Signin from './Signin'
	import Signup from './Signup'

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

		},
		created: function() {
			this.ContentMode = this.LeftMenuSelected;
		},
		firebase: {
			users: usersRef
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
			Landing,
			Signup,
			Signin,
		}
	}
</script>
