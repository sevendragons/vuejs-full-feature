<template>
    <div>
        <h1>Cart</h1>

        <table v-if="cart.items.length > 0" class="table table-striped">
            <thead>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="item in cart.items">
                <td>{{ item.product.name }}</td>
                <td>
                    {{ item.quantity }} &nbsp;
                    <button class="btn btn-success" @click="increaseQuantity(item)" :disabled="item.product.inStock == 0">+</button>
                      <button class="btn btn-danger" @click="decreaseQuantity(item)">-</button>
                </td>
                <td>{{ item.quantity * item.product.price | currency }}</td>
            </tr>

            <tr>
                <td class="text-right" colspan="2">
                    <strong>Subtotal</strong>
                </td>

                <td>{{ cartTotal | currency }}</td>
            </tr>

            <tr>
                <td class="text-right" colspan="2">
                    <strong>Taxes</strong>
                </td>

                <td>{{ taxAmount(12) | currency }}</td>
            </tr>

            <tr>
                <td class="text-right" colspan="2">
                    <strong>Coupon Code</strong>
                </td>

                <td><input type="text" class="form-control" placeholder="Enter coupon code here" style="..."></td>
            </tr>

            <tr>
                <td class="text-right" colspan="2">
                    <strong>Grand total</strong>
                </td>

                <td>{{ cartTotal + taxAmount(12) | currency }}</td>
            </tr>

            <tr>
                <td colspan="2" class="text-right">
                  <span v-if="couponCode"><em>Lucky you! You entered the following coupon code: {{couponCode}}</em></span>
                </td>
                <td><button class="btn btn-success" @click="checkout">Checkout</button></td>
            </tr>
            </tbody>
        </table>

        <p v-else>Your cart is currently empty.</p>
    </div>
</template>

<script>
    // import CartMixin from './mixins/cart';
    import {mapGetters} from 'vuex';
    import {mapMutations} from 'vuex';
    import {CHECKOUT, UPDATE_COUPON_CODE} from './mutation-types'

    export default {
        // props: ['cart'],
        // mixins: [ CartMixin ],
        computed: {
          /*------- This syntax need 2 package in devDependencies: babel-preset-es2015, babel-preset-stage-2 then create .babelrc file -------*/
          ...mapGetters([
            'cartTotal',
            'taxAmount',
            'updateCouponCode'
          ]),

          cart() {
            return this.$store.state.cart;
          },
          // cartTotal() {
          //   return this.$store.getters.cartTotal;
          // },
          // taxAmount() {
          //   return this.$store.getters.taxAmount(12);
          // }
          couponCode: {
            get(){
               return this.$store.state.couponCode;
            },
            set(value){
              this.$store.commit(UPDATE_COUPON_CODE, value);
            }
          }

        },


        beforeRouteLeave(to, from, next) {
            if (this.cart.items.length > 0) {
                if (!confirm('Are you sure you don\'t want to buy these products?')) {
                    return next(false);
                }
            }

            next();
        },

        methods: {
          ...mapMutations([
            CHECKOUT
          ]),
          // checkout() {
              // this.$store.commit('checkout');
          // }
        }
    }
</script>
