webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_resource__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bootstrap_dist_css_bootstrap_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_bootstrap_dist_css_bootstrap_css__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.








__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_4_vue_resource__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/*------- Vuex -------*/
const store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state: {
    cart: {
      items: []
    }
  },
  getters: {
    cartTotal: state => {
      let total = 0;

      state.cart.items.forEach(function (item) {
        total += item.product.price * item.quantity;
      });
      return total;
    },

    taxAmount: (state, getters) => {
      percentage => {
        return getters.cartTotal * percentage / 100;
      };
      // taxAmount: ( state, getters ) => {
      //   return function(percentage) {
      //     return ((getters.cartTotal * percentage) / 100 );
      //   };

      // return((getters.cartTotal * 10) / 100 );
    }
  }
});
/*------- End -------*/

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].filter('currency', function (value) {
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });

  return formatter.format(value);
});

const eventBus = new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]();
/* harmony export (immutable) */ __webpack_exports__["eventBus"] = eventBus;

const authService = { isLoggedIn: false };
/* harmony export (immutable) */ __webpack_exports__["authService"] = authService;


const router = new __WEBPACK_IMPORTED_MODULE_3_vue_router__["a" /* default */]({
  routes: __WEBPACK_IMPORTED_MODULE_5__routes__["a" /* routes */],
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

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].http.options.root = 'http://localhost:3000';
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].http.headers.common['X-Requested-With'] = 'XMLHttpRequest';

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].http.interceptors.push((request, next) => {
  request.headers.set('X-CSRF-TOKEN', 'VERY_SECURE_TOKEN_HERE');
  next(response => {
    console.log(response);
  });
});

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  render: h => h(__WEBPACK_IMPORTED_MODULE_2__App___default.a),
  router: router,
  store: store
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProductList_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProductList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ProductList_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewProduct_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewProduct_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ViewProduct_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Cart_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Cart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Cart_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ViewProfile_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ViewProfile_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ViewProfile_vue__);





const routes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_0__ProductList_vue___default.a }, { path: '/products/:productId', name: 'viewProduct', props: true, component: __WEBPACK_IMPORTED_MODULE_1__ViewProduct_vue___default.a }, { path: '/cart', component: __WEBPACK_IMPORTED_MODULE_2__Cart_vue___default.a }, {
    path: '/user/profile',
    name: 'viewProfile',
    component: __WEBPACK_IMPORTED_MODULE_3__ViewProfile_vue___default.a,
    meta: {
        isAuthRequired: true
    }
}, { path: '*', component: { template: '<h1>Page Not Found!</h1>' } }];
/* harmony export (immutable) */ __webpack_exports__["a"] = routes;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(15)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(27),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import { eventBus } from './main';
// import CartMixin from './mixins/cart';


/* harmony default export */ __webpack_exports__["default"] = ({
    // mixins: [ CartMixin ],
    data() {
        return {
            auth: __WEBPACK_IMPORTED_MODULE_0__main__["authService"]
        };
    },
    created() {
        // eventBus.$on('addItemToCart', (data) => {
        //     this.addProductToCart(data.product, data.quantity);
        // });
    },
    computed: {
        cart() {
            return this.$store.state.cart;
        },
        cartTotal() {
            return this.$store.getters.cartTotal;
        }
    }
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (68:6)\n\n\u001b[0m \u001b[90m 66 | \u001b[39m    \u001b[90m// mixins: [ CartMixin ],\u001b[39m\n \u001b[90m 67 | \u001b[39m    computed\u001b[33m:\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 68 | \u001b[39m      \u001b[33m...\u001b[39mmapGetters([\n \u001b[90m    | \u001b[39m      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 69 | \u001b[39m        \u001b[32m'cartTotal'\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 70 | \u001b[39m        \u001b[32m'taxAmount'\u001b[39m\n \u001b[90m 71 | \u001b[39m      ])\u001b[33m,\u001b[39m\u001b[0m\n");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import { eventBus } from './main';

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            products: []
        };
    },
    computed: {
        cart() {
            return this.$store.state.cart;
        }
    },
    created() {
        this.$http.get('products').then(response => {
            return response.json();
        }, response => {
            alert("error");
        }).then(products => {
            this.products = products;
        });
    },
    methods: {
        addProductToCart(product, quantity) {
            let cartItem = this.getCartItem(product);

            /*------- Verify that  there is 'quantity' of the product in stock before adding it -------*/
            if (cartItem != null) {
                cartItem.quantity += quantity;
            } else {
                this.cart.items.push({
                    product: product,
                    quantity: quantity
                });
            }

            product.inStock -= quantity;
        },

        getCartItem(product) {
            for (let i = 0; i < this.cart.items.length; i++) {
                if (this.cart.items[i].product.id === product.id) return this.cart.items[i];
            }

            return null;
        },

        clickedImage(product) {
            this.$router.push({
                name: 'viewProduct',
                params: {
                    productId: product.id
                }
            });
        }
    }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        productId: {
            required: true
        }
    },
    data() {
        return {
            product: null,
            newReview: {
                text: '',
                rating: 0,
                reviewer: ''
            },
            reviewResource: null
        };
    },
    computed: {
        cart() {
            return this.$store.state.cart;
        }
    },
    created() {
        let customActions = {
            softDelete: {
                method: 'DELETE',
                url: 'products/{productId}/reviews/{reviewId}?soft=true'
            }
        };

        let url = 'products/{productId}/reviews/{reviewId}';
        this.reviewResource = this.$resource(url, {}, customActions);

        this.getProduct(this.productId).then(product => this.product = product);
    },
    beforeRouteUpdate(to, from, next) {
        this.getProduct(to.params.productId).then(product => this.product = product);

        next();
    },
    methods: {
        getProduct(productId) {
            return this.$http.get('products/{productId}', {
                params: {
                    productId: productId
                }
            }).then(response => response.json(), response => alert("Could not retrieve product!"));
        },
        goBack() {
            this.$router.history.go(-1);
        },
        addNewReview(review) {
            this.$http.post('products/{productId}/reviews', review, {
                params: {
                    productId: this.product.id
                }
            }).then(response => response.json(), response => alert("Could not add review!")).then(newReview => this.product.reviews.push(newReview));
        },
        deleteReview(review) {
            //this.reviewResource.delete({
            this.reviewResource.softDelete({
                productId: this.product.id,
                reviewId: review.id
            }).then(response => {
                // Just be lazy and fetch product again
                this.getProduct(this.product.id).then(product => this.product = product);
            }, response => alert("Could not delete review!"));
        },

        addProductToCart() {
            let cartItem = this.getCartItem(this.product);

            /*------- Verify that  there is 'quantity' of the product in stock before adding it -------*/
            if (cartItem != null) {
                cartItem.quantity++;
            } else {
                this.cart.items.push({
                    product: this.product,
                    quantity: 1
                });
            }

            this.product.inStock--;
        },

        getCartItem(product) {
            for (let i = 0; i < this.cart.items.length; i++) {
                if (this.cart.items[i].product.id === product.id) return this.cart.items[i];
            }

            return null;
        }

    }
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(25),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(14)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(26),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(24),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(23),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h1', [_vm._v("My Profile")])
},staticRenderFns: []}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": _vm.goBack
    }
  }, [_vm._v("« Back")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    on: {
      "click": _vm.addProductToCart
    }
  }, [_vm._v("Add to Card")]), _vm._v(" "), (_vm.product != null) ? _c('div', [_c('h1', [_vm._v(_vm._s(_vm.product.name))]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("ID:")]), _vm._v(" " + _vm._s(_vm.product.id))]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("Price:")]), _vm._v(" " + _vm._s(_vm._f("currency")(_vm.product.price)))]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("In stock:")]), _vm._v(" " + _vm._s(_vm.product.inStock))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.product.description))]), _vm._v(" "), _c('h2', [_vm._v("Reviews")]), _vm._v(" "), (_vm.product.reviews.length > 0) ? _c('div', _vm._l((_vm.product.reviews), function(review) {
    return _c('div', [_c('strong', [_vm._v(_vm._s(review.reviewer))]), _vm._v(" (rating: " + _vm._s(review.rating) + ") -\n                "), _c('a', {
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.deleteReview(review)
        }
      }
    }, [_vm._v("delete")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(review.text))])])
  }), 0) : _c('div', [_c('p', [_vm._v("No reviews have been added for this product.")])]), _vm._v(" "), _c('h3', [_vm._v("Add Review")]), _vm._v(" "), _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.addNewReview(_vm.newReview)
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "reviewName"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newReview.reviewer),
      expression: "newReview.reviewer"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "reviewName",
      "placeholder": "Name"
    },
    domProps: {
      "value": (_vm.newReview.reviewer)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.newReview, "reviewer", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "reviewRating"
    }
  }, [_vm._v("Rating")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.newReview.rating),
      expression: "newReview.rating",
      modifiers: {
        "number": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "type": "number",
      "id": "reviewRating",
      "placeholder": "Rating"
    },
    domProps: {
      "value": (_vm.newReview.rating)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.newReview, "rating", _vm._n($event.target.value))
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "reviewText"
    }
  }, [_vm._v("Text")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newReview.text),
      expression: "newReview.text"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "reviewText",
      "cols": "30",
      "rows": "10"
    },
    domProps: {
      "value": (_vm.newReview.text)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.newReview, "text", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Submit Review")])])]) : _c('div', [_c('p', [_vm._v("Loading...")])])])
},staticRenderFns: []}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("Cart")]), _vm._v(" "), (_vm.cart.items.length > 0) ? _c('table', {
    staticClass: "table table-striped"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', [_vm._l((_vm.cart.items), function(item) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(item.product.name))]), _vm._v(" "), _c('td', [_vm._v("\n                " + _vm._s(item.quantity) + "  \n                "), _c('button', {
      staticClass: "btn btn-success",
      attrs: {
        "disabled": item.product.inStock == 0
      },
      on: {
        "click": function($event) {
          _vm.increaseQuantity(item)
        }
      }
    }, [_vm._v("+")]), _vm._v(" "), _c('button', {
      staticClass: "btn btn-danger",
      on: {
        "click": function($event) {
          _vm.decreaseQuantity(item)
        }
      }
    }, [_vm._v("-")])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("currency")(item.quantity * item.product.price)))])])
  }), _vm._v(" "), _c('tr', [_vm._m(1), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("currency")(_vm.cartTotal)))])]), _vm._v(" "), _c('tr', [_vm._m(2), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("currency")(_vm.taxAmount(12))))])]), _vm._v(" "), _c('tr', [_vm._m(3), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("currency")(_vm.cartTotal + _vm.taxAmount(12))))])]), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "colspan": "2"
    }
  }), _vm._v(" "), _c('td', [_c('button', {
    staticClass: "btn btn-success",
    on: {
      "click": _vm.checkout
    }
  }, [_vm._v("Checkout")])])])], 2)]) : _c('p', [_vm._v("Your cart is currently empty.")])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("Product")]), _vm._v(" "), _c('th', [_vm._v("Quantity")]), _vm._v(" "), _c('th', [_vm._v("Price")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "2"
    }
  }, [_c('strong', [_vm._v("Subtotal")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "2"
    }
  }, [_c('strong', [_vm._v("Taxes")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "2"
    }
  }, [_c('strong', [_vm._v("Grand total")])])
}]}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row list-group",
    attrs: {
      "id": "products"
    }
  }, _vm._l((_vm.products), function(product) {
    return _c('div', {
      staticClass: "item col-xs-4"
    }, [_c('div', {
      staticClass: "thumbnail"
    }, [_c('img', {
      staticClass: "group list-group-image",
      attrs: {
        "src": "http://placehold.it/400x250/000/fff"
      },
      on: {
        "click": function($event) {
          _vm.clickedImage(product)
        }
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "caption"
    }, [_c('router-link', {
      staticClass: "group inner list-group-item-heading",
      attrs: {
        "to": {
          name: 'viewProduct',
          params: {
            productId: product.id
          }
        },
        "tag": "h4"
      }
    }, [_c('a', [_vm._v(_vm._s(product.name))])]), _vm._v(" "), _c('p', {
      staticClass: "group inner list-group-item-text"
    }, [_vm._v(_vm._s(product.description))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
      staticClass: "row flex flex-row align-center"
    }, [_c('div', {
      staticClass: "col-xs-4"
    }, [_c('p', {
      staticClass: "lead"
    }, [_vm._v(_vm._s(_vm._f("currency")(product.price)))])]), _vm._v(" "), _c('div', {
      staticClass: "col-xs-8 flex flex-row align-center justify-right"
    }, [_c('div', {
      staticClass: "number-in-stock",
      class: {
        few: product.inStock < 10 && product.inStock > 0, none: product.inStock == 0
      }
    }, [_vm._v("\n                            " + _vm._s(product.inStock) + " in stock\n                        ")]), _vm._v(" "), _c('button', {
      staticClass: "btn btn-success",
      attrs: {
        "disabled": product.inStock == 0
      },
      on: {
        "click": function($event) {
          _vm.addProductToCart(product, 1)
        }
      }
    }, [_vm._v("Add to cart")])])])], 1)])])
  }), 0)
},staticRenderFns: []}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('nav', {
    staticClass: "navbar navbar-default"
  }, [_c('div', {
    staticClass: "container-fluid"
  }, [_c('div', {
    staticClass: "navbar-header"
  }, [_c('router-link', {
    staticClass: "navbar-brand",
    attrs: {
      "to": "/",
      "exact": ""
    }
  }, [_c('strong', [_vm._v("E-commerce Inc.")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "collapse navbar-collapse",
    attrs: {
      "id": "bs-example-navbar-collapse-1"
    }
  }, [_c('ul', {
    staticClass: "nav navbar-nav"
  }, [_c('router-link', {
    attrs: {
      "to": "/",
      "tag": "li",
      "exact": "",
      "active-class": "active"
    }
  }, [_c('a', [_vm._v("Products")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/cart",
      "tag": "li",
      "active-class": "active"
    }
  }, [_c('a', [_vm._v("Cart")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "nav navbar-nav navbar-right"
  }, [_c('div', {
    staticClass: "stats"
  }, [_vm._v(_vm._s(_vm.cart.items.length) + " "), (_vm.cart.items.length == 1) ? [_vm._v("item")] : [_vm._v("items")], _vm._v(" in cart, totalling " + _vm._s(_vm._f("currency")(_vm.cartTotal)))], 2), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "8px"
    }
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'viewProfile'
      }
    }
  }, [_vm._v("My Profile")]), _vm._v("\n                         \n                        "), (_vm.auth.isLoggedIn) ? _c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": function($event) {
        _vm.auth.isLoggedIn = false
      }
    }
  }, [_vm._v("Log out")]) : _c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": function($event) {
        _vm.auth.isLoggedIn = true
      }
    }
  }, [_vm._v("Log in")])], 1)])])])]), _vm._v(" "), _c('transition', {
    attrs: {
      "enter-active-class": "animated fadeInRight",
      "leave-active-class": "animated fadeOutLeft",
      "mode": "out-in"
    }
  }, [_c('router-view', {
    attrs: {
      "cart": _vm.cart
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
],[2]);
//# sourceMappingURL=app.e7014c971578e6ee2dff.js.map