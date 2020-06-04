import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Dashboard from './views/Dashboard.vue';
import PageNotFound from './views/PageNotFound.vue';
import store from "@/store/store";

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                auth: true,
            },
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: {
                auth: true,
            },
        },
        {
            path: '*',
            name: 'page-not-found',
            component: PageNotFound
        }
    ],
});

router.beforeEach((to, from, next) => {
    if (to.meta.auth === true) {
        if (store.getters['authModule/isAuthenticated'] === true) {
            next();
        } else {
            next('login');
        }
    } else {
        next();
    }
});

export default router;
