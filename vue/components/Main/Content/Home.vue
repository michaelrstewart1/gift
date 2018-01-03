<template>
        <div id="home_content">
		<loading v-if="loading"></loading>
		<div id="banner_tile" class="tile" v-if="!loading">
						
		</div>
        </div>
</template>
<script>
	import Loading from '../../Utilities/Loading.vue'
        export default {
                props: {

                },
                data: function() {
                        return {
				loading: true,					
			}
                },
                ready: function() {
					
                },
                created: function() {
			this.get_home_data();
                },
                computed: {
					
                },
		watch: {
					
		},
                methods: {
			get_home_data: function() {
				var _this = this;
				this.loading = true;
				$.ajax({
					type: "GET",
					url:'API/user/get_home_data.php',
					success: res => {
						var parsed = JSON.parse(res);
						//set resource in vue
						console.log("data returned and setting loading=false");
						this.loading = false;
					},
					error: function() {
						console.log("detected error and setting loading=false");
						this.loading = false;
					}
				});
			},		
                },
                components: {
			Loading,			
                }
        }
</script>
