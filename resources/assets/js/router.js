import VueRouter from 'vue-router';
// import CreateAdmin from './pages/CreateAdmin';



const routes = [
    {path: '/', component: ()=>import( /* webpackChunkName: "CreateAdmin" */ './pages/CreateAdmin')},
]


export default function createRouter(Vue) {
    Vue.use(VueRouter);
    return new VueRouter({
        mode: 'history',
        routes
    })
}