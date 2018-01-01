<template>
        <div id="left_menu">
		<div v-for="MenuOption in this.MenuOptions" class="clickable" :class="[{'selected': (LeftMenuSelected == MenuOption.value)}]" @click="SelectMenu(MenuOption)">
			<i class="material-icons uneditable">{{MenuOption.icon}}</i>
			<span class="uneditable">{{MenuOption.title}}</span>
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
                        return {
                                MenuOptions: {
                                        'home': {
                                                title: 'Home',
                                                value: 'home',
                                                icon: 'home',
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
				var NewVal = menu.value;
				this.SetLeftMenuSelected(NewVal);
			},
                },
                components: {

                }
        }
</script>
