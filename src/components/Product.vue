<template>
    <div>
        <v-btn style="margin-left:0" dark @click="goBack"><v-icon dark>arrow_back_ios
</v-icon> Back</v-btn>

        <h1>{{ product.name }}</h1>

        <ul class="nav nav-pills">
            <router-link
                    class="presentation"
                    :to="{ name: 'viewProduct', params: { productId: product.id } }"
                    tag="li"
                    active-class="active">
                <v-btn color="purple" dark style="margin-left:0"><a>Details</a></v-btn>
            </router-link>

            <router-link
                    class="presentation"
                    :to="{ name: 'productReviews', params: { productId: product.id } }"
                    tag="li"
                    active-class="active">
                <v-btn color="purple" dark style="margin-left:0"><a>Review</a></v-btn>
            </router-link>
        </ul>

        <br>
        <router-view></router-view>

        <div v-if="relatedProducts != null" id="related" style="margin: 80px 0 16px 0;">
            <h2>Related Products</h2>
            <ul>
                <li v-for="related in relatedProducts">
                    <router-link :to="{ name: 'viewProduct', params: { productId: related.id } }">
                        {{ related.name }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { products } from '../data/products';

    export default {
        props: {
            productId: {
                required: true
            }
        },
        data() {
            return {
                products: products,
                product: null
            };
        },
        created() {
            this.product = this.getProduct(this.productId);
        },
        watch: {
            productId(newValue, oldValue) {
                this.product = this.getProduct(newValue);
            }
        },
        methods: {
            getProduct(productId) {
                let match = null;

                this.products.forEach(function(product) {
                    if (product.id == productId) {
                        match = product;
                    }
                });

                return match;
            },
            goBack() {
                this.$router.go(-1);
                // this.$router.push('/');
            }
        },
        computed: {
            relatedProducts() {
                if (this.product === null) {
                    return [];
                }

                let related = [];
                let count = 0;

                this.products.forEach((product) => {
                    if (product.id != this.product.id && count < 5) {
                        related.push(product);
                        count++;
                    }
                });

                return related;
            }
        }
    }
</script>
<style>

</style>
