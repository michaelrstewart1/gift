<template>
	<div id="loading" class="v-spinner clearfix" v-show="loading">
		<div class="v-bounce v-bounce1" v-bind:style="spinnerBasicStyle">
			<div class="v-bounce v-bounce2" v-bind:style="spinnerStyle"></div>
			<div class="v-bounce v-bounce3" v-bind:style="spinnerStyle"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'BounceLoader',
		props: {
			loading: {
				type: Boolean,
				default: true
			},
			display: {
				type: String,
				default: 'inline-block'
			},
			color: { 
				type: String,
				default: '#5dc596'
			},
			size: {
				type: String,
				default: '60px'
			},
			margin: {
				type: String,
				default: '2px'
			},
			radius: {
				type: String,
				default: '100%'
			}
		},
		data () {
			return {
				spinnerStyle: {
					backgroundColor: this.color,
					height: this.size,
					width: this.size,
					borderRadius: this.radius,
					opacity: 0.6,
					position: 'absolute',
					display: this.display,
					top: 0,
					left: 0
				}
			}
		},
		computed: {
			spinnerBasicStyle () {
				return {
					height: this.size,
					width: this.size,
					position: 'absolute',
					display: this.display,
					top: '45%',
				}
			}
		}
	}
</script>
