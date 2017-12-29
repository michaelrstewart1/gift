<template>
	<div id="main">
		<top-menu></top-menu>
		<left-menu></left-menu>	
	</div>
</template>

<script>
	import TopMenu from './TopMenu'
	import LeftMenu from './LeftMenu'

	export default {
		props: {
	
		},
		data: function() {
			return {
				test_var: 1,
			}
		},
		ready: function() {
	
		},
		created: function() {
	
		},
		computed: {
	
		},
		methods: {
	
		},
		components: {
			TopMenu,
			LeftMenu,
		}
	}
</script>
