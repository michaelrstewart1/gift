<template>
        <div id="left_menu">
		<div v-for="MenuOption in this.MenuOptions" class="clickable" :class="[{'selected': (SelectedMenu == MenuOption.value)}]" @click="SelectMenu(MenuOption)">
			<i class="material-icons uneditable">{{MenuOption.icon}}</i>
			<span class="uneditable">{{MenuOption.title}}</span>
		</div>
        </div>
</template>
<script>
        export default {
                props: {

                },
                data: function() {
                        return {
                                MenuOptions: {
                                        'home': {
                                                title: 'Home',
                                                value: 'home',
                                                icon: 'weekend',
                                        },
                                        'orders': {
                                                title: 'Orders',
                                                value: 'orders',
                                                icon: 'shopping_cart',
                                        },
                                        'calendar': {
                                                title: 'Calendar',
                                                value: 'calendar',
                                                icon: 'event',
                                        },
                                        'organize': {
                                                title: 'Organize',
                                                value: 'organize',
                                                icon: 'dashboard',
                                        },
                                        'discover': {
                                                title: 'Discover',
                                                value: 'discover',
                                                icon: 'local_library',
                                        },
                                },
				SelectedMenu: 'home',
			}
                },
                ready: function() {
                },
                created: function() {
                },
                computed: {
                },
                methods: {
			SelectMenu: function(menu) {
				if (!menu) return;
				this.SelectedMenu = menu.value;
			},
                },
                components: {
                }
        }
</script>
