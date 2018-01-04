// entry point file
import Vue from '../js/external/vue.esm.js'
import App from '../vue/components/Main/Main'
import VueFire from 'vuefire'
import firebase from 'firebase'

Vue.use(VueFire);

new Vue(App).$mount('#app');

