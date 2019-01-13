import ProductList from '../components/ProductList.vue';
import ViewProduct from '../components/ViewProduct.vue';
import Cart from '../components/Cart.vue';
import Product from '../components/Product.vue';
import ProductReviews from '../components/ProductReviews.vue';
import SpecialOffer from '../components/SpecialOffer.vue';
import ViewProfile from '../components/ViewProfile.vue';

export const routes = [
    { path: '', components: {
        default: ProductList,
        discount: SpecialOffer
    } },
    { path: '/products/:productId', name: 'product', props: true, component: Product, children: [
        { path: 'details', name: 'viewProduct', props: true, component: ViewProduct },
        { path: 'reviews', name: 'productReviews', props: true, component: ProductReviews }
    ] },
    {
        path: '/user/profile',
        name: 'viewProfile',
        component: ViewProfile,
        meta: {
            isAuthRequired: true
        }
    },
    { path: '/cart', component: Cart },
    { path: '*', component: { template: '<h1>Page Not Found!</h1>' } }
];
