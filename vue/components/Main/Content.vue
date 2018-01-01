<template>
        <div id="main_content">
		<home v-if="this.ContentMode ? (this.ContentMode == 'home' ? true : false) : false">Home</home>
                <orders v-if="this.ContentMode ? (this.ContentMode == 'orders' ? true : false) : ''">Orders</orders>
                <calendar v-if="this.ContentMode ? (this.ContentMode == 'calendar' ? true : false) : false">Calendar</calendar>
                <organize v-if="this.ContentMode ? (this.ContentMode == 'organize' ? true : false) : false">Organize</organize>
                <discover v-if="this.ContentMode ? (this.ContentMode == 'discover' ? true : false) : false">Discover</discover>
        </div>
</template>
<script>
        import Home from './Content/Home'
        import Orders from './Content/Orders'
        import Calendar from './Content/Calendar'
        import Organize from './Content/Organize'
        import Discover from './Content/Discover'

        export default {
                props: {
			ContentMode: {
				type: String,
			},
                        LeftMenuSelected: {
                                type: String,
                        },
                        SetLeftMenuSelected: {
                                type: Function,
                        }
                },
                data: function() {
                        return {

			}
                },
                ready: function() {

                },
                created: function() {

                },
                computed: {

                },
		watch: {
				
		},
                methods: {

                },
                components: {
			Home,
			Orders,
			Calendar,
			Organize,
			Discover,
                }
        }
</script>
