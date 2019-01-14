import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Vuetify from 'vuetify';
import VueResource from 'vue-resource'

import { routes } from './router/index';

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(VueResource );

const router = new VueRouter({
    routes: routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
            };
        }

        if (savedPosition) {
            return savedPosition;
        }

        return { x: 0, y: 0 };
    }
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.isAuthRequired)) {
        if (!authService.isLoggedIn) {
            alert("You must be logged in!");
            return next(false);
        }
    }

    next();
});

router.afterEach((to, from) => {
    //alert("You just navigated somewhere!");
});

Vue.filter('currency', function(value) {
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });

    return formatter.format(value);
});

export const eventBus = new Vue();
export const authService = { isLoggedIn: false };



/*------- Fetch Http use vue-resource -------*/




new Vue({
    el: '#app',
    render: h => h(App),
    router: router
})
