// require('./bootstrap');

// let Vue = window.Vue = require('vue');

import Vue from 'vue';



import createRouter from './router';


Vue.component('example-component', require('./components/ExampleComponent.vue'));

import App from './App';

const app = new Vue({
    el: '#app',
    router: createRouter(Vue),
    render: h => h(App),
});
