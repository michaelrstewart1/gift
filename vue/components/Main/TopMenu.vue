<template>
        <div id="top_menu">
		<div id="main_navigation_menu">
			<div id="main_navigation_dropdown" class="clickable">
				<div id="main_navigation_dropdown_button"></div>
				<i id="main_navigation_dropdown_menu_icon" data-toggle="tooltip" title="Menu" class="material-icons uneditable">dashboard</i>
			</div>
			<div id="site_name_wrapper" class="page-header uneditable">
				<h1><font class="clickable">Gifts</font></h1>
			</div>
		</div>
		<div id="user_menu">
			<i id="user_menu_icon" data-toggle="tooltip" title="User Menu" class="material-icons uneditable clickable">face</i>
		</div>
        </div>
</template>

<script>
        export default {
		props: {
                        ContentMode: {
                                type: String,
                        },
                        LeftMenuSelected: {
                                type: String,
                                required: true,
                        },
                        SetLeftMenuSelected: {
                                type: Function,
                                required: true,
                        }
                },
                data: function() {
                        return {}
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
                }
        }
</script>
