<template>
    <div>
        <router-view name="discount"></router-view>

        <div class="container">
            <nav class="navbar navbar-light flex flex-row" style="padding-left:0">
                <div class="container-fluid" style="padding-left:0">
                    <div class="navbar-header">
                        <router-link to="/" exact class="navbar-brand"><strong>E-commerce Inc.</strong></router-link>
                    </div>

                    <div class="navbar-collapse flex flex-row" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            <li>
                                <router-link to="/" tag="li" exact active-class="active">
                                  <v-btn dark color="teal"><a>Products</a></v-btn>
                                </router-link>
                            </li>
                            <li>
                              <router-link to="/cart" tag="li" active-class="active">
                                <v-btn dark color=teal><a>Cart</a></v-btn>
                              </router-link>
                            </li>
                        </ul>

                        <div class="nav navbar-nav navbar-right">
                            <div class="stats">{{ cart.items.length }} <template v-if="cart.items.length == 1">item</template><template v-else>items</template> in cart, totalling {{ cartTotal | currency }}</div>

                            <div style="margin: 10px;">
                                <router-link :to="{ name: 'viewProfile' }"><v-btn color="pink" dark>My Profile</v-btn></router-link>
                                &nbsp;
                                <v-btn color="teal" dark v-if="auth.isLoggedIn" class="btn btn-primary" @click="auth.isLoggedIn = false">Log out</v-btn>
                                <v-btn color="teal" dark v-else class="btn btn-primary" @click="auth.isLoggedIn = true">Log in</v-btn>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <transition
                    enter-active-class="animated fadeInRight"
                    leave-active-class="animated fadeOutLeft"
                    mode="out-in">
                <router-view :cart="cart"></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import CartMixin from './mixins/cart';
    import { authService, eventBus } from './main';

    export default {
        mixins: [ CartMixin ],
        data() {
            return {
                cart: {
                    items: []
                },
                auth: authService
            };
        },
        created() {
            eventBus.$on('addItemToCart', (data) => {
                this.addProductToCart(data.product, data.quantity);
            });
        }
    }
</script>

<style>
    .flex { display:flex }
    .flex.flex-column { flex-direction: column; }
    .flex.flex-row, .navbar-nav { flex-direction: row;}
    .navbar-nav li { margin-right: 12px;}
    .flex.justify-center { justify-content: center; }
    .flex.justify-left { justify-content: flex-start; }
    .flex.justify-right { justify-content: flex-end; }
    .flex.align-center { align-items: center; }
    .flex.align-left { align-items: flex-start; }
    .flex.align-right { align-items: flex-end; }

    /* Navigation */
    .navbar .stats {
        margin-top: 21px;
    }
</style>
