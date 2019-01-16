// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { routes } from './routes';
import 'bootstrap/dist/css/bootstrap.css';
import {ADD_PRODUCT_TO_CART, CHECKOUT, INCREASE_PRODUCT_QUANTITY, UPDATE_COUPON_CODE} from './mutation-types.js'

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuex);

/*------- Vuex -------*/
const store = new Vuex.Store({
  state: {
    cart: {
      items: []
    },
    couponCode: ''
  },
  mutations: {
    [CHECKOUT](state) {
      state.cart.items.forEach(function(item) {
        item.product.inStock += item.quantity;
      });

        state.cart.items = [];
    },
    [ADD_PRODUCT_TO_CART](state, payload) {
      // let cartItem = state.getCartItem(payload.product);
      let cartItem = null;
      // getCartItem: (state) => (product) => {
        for (let i = 0; i < state.cart.items.length; i++) {
          if (state.cart.items[i].product.id === payload.product.id){
            cartItem = state.cart.items[i]
          }
        }

      /*------- Verify that  there is 'quantity' of the product in stock before adding it -------*/
      // if (cartItem != null) {
      //   cartItem.quantity += payload.quantity;
      // } else {
      state.cart.items.push({
        product: payload.product,
        quantity: payload.quantity
      })
      payload.product.inStock -= payload.quantity;
    },

    [INCREASE_PRODUCT_QUANTITY] (state, payload) {
      payload.cartItem.quantity += payload.quantity;
      payload.product.inStock -= payload.quantity;
    },
    [UPDATE_COUPON_CODE] (state, payload) {
      state.couponCode = payload;

    }
  },

  actions: {
    [ADD_PRODUCT_TO_CART] ({commit, getters}, payload) {
      return new Promise((resolve, reject) => {
        let cartItem = getters.getCartItem(payload.product);
        payload.cartItem = cartItem;

        if (cartItem == null) {
          let requestUrl = 'http://localhost:3000/cart/add/{productId}/{quantity}';
          Vue.http.post(requestUrl, {}, {
            params: {
              productId: payload.product.id,
              quantity: payload.quantity
            }
          }).then(
            response => {
              commit(ADD_PRODUCT_TO_CART, payload);
              resolve();
            },
            response => {
              alert("Could not add product to cart");
              reject();
            }
          );
        } else {
          let requestUrl = 'http://localhost:3000/cart/increase-quantity/{productId}';
          Vue.http.post(requestUrl, {}, {
            params: {
              productId: payload.product.id,
            }
          }).
          then(
            response => {
              commit(INCREASE_PRODUCT_QUANTITY, payload);
              resolve()
            },
            response => {
              alert("Could not increase product quantity");
              reject();
            }
          );
        }
      });
    }
  },

  getters: {
    cartTotal: (state) => {
      let total = 0;

      state.cart.items.forEach(function(item) {
        total += item.product.price * item.quantity
      });
      return total;
    },

    taxAmount: ( state, getters ) =>
      (percentage) =>  {
        return ((getters.cartTotal * percentage) / 100 );
      },
      // taxAmount: ( state, getters ) => {
      //   return function(percentage) {
      //     return ((getters.cartTotal * percentage) / 100 );
      //   };
      // }

    getCartItem: (state) => (product) => {
      for (let i = 0; i < state.cart.items.length; i++) {
        if (state.cart.items[i].product.id === product.id){
          return state.cart.items[i]
        }
      }
      return null;
    }
  },
});
/*------- End -------*/

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

Vue.http.options.root = 'http://localhost:3000';
Vue.http.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-CSRF-TOKEN', 'VERY_SECURE_TOKEN_HERE');
    next((response) => {
        console.log(response);
    });
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store: store
});
