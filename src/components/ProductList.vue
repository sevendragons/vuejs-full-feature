±<template>
    <div id="products" class="product">
        <v-layout row wrap>
          <v-flex class="card1" v-for="product in products" key="`product.name`">
            <v-card class="thumbnail">
              <v-img @click="clickedImage(product)" class="group list-group-image" src="http://placehold.it/400x250/000/fff" aspect-ratio="2.75"></v-img>
              <div class="caption">
                <router-link
                :to="{ name: 'viewProduct', params: { productId: product.id }, hash: '#related' }"
                tag="h4"
                class="group inner list-group-item-heading" style="padding: 8px 12px 0 12px">
                <a>{{ product.name }}</a>
              </router-link>

              <p style="padding: 0 12px" class="group inner list-group-item-text">{{ product.description }}</p>
              <br>

              <div class="row flex flex-row align-center">
                <p class="lead">{{ product.price | currency }}</p>

                <div class="stock flex flex-row align-center justify-right">
                  <div class="number-in-stock" :class="{ few: product.inStock < 10 && product.inStock > 0, none: product.inStock == 0 }">
                    {{ product.inStock }} in stock
                  </div>
                  <v-btn dark color="green" @click="addProductToCart(product, 1)" :disabled="product.inStock == 0">Add to cart</v-btn>
                </div>
              </div>
            </div>
            </v-card>
          </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import { products } from '../data/products';
    import { eventBus } from '../main';

    export default {
        data() {
            return {
                products: products
            };
        },
        methods: {
            addProductToCart(product, quantity) {
                eventBus.$emit('addItemToCart', {
                    product: product,
                    quantity: quantity
                });
            },
            clickedImage(product) {
                this.$router.push({
                    name: 'viewProduct',
                    params: {
                        productId: product.id
                    },
                    query: {
                        discount: 10
                    }
                });
            }
        }
    }
</script>

<style scoped>
    #products .item img { background-color: #000; }
    #products .item p.lead { margin-bottom: 0; }
    #products .item .number-in-stock { margin-right: 10px; }
    #products .item .number-in-stock.few { color: #E0A14F; }
    #products .item .number-in-stock.none { color: #C45E5E; }
    .card1{
      width: 300px;
      margin: 16px;

    }
    .stock{
      padding-bottom: 16px
    }

    #products{
      display: flex;
      flex-flow: row-nowrap;
    }
    .lead{
      padding: 0 27px;
    }

</style>
