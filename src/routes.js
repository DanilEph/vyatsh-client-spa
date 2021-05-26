import { ADMIN_PAGE, HOME_PAGE, PRODUCT_CARD, SHOPPING_CART, STORE } from "./utils/consts";
import { HomePage } from './pages/HomePage';
import { Store } from './pages/Store';
import { AdminPage } from './pages/AdminPage';
import { ShoppingCart } from './pages/ShoppingCart';
import { ProductCard } from './pages/ProductCard';

export const customerRoute = [
    {
        path: SHOPPING_CART,
        component: ShoppingCart
    }
];

export const employeeRoute = [
    {
        path: ADMIN_PAGE,
        component: AdminPage
    }

];

export const publicRoute = [
    {
        path: HOME_PAGE,
        component: HomePage
    },

    { 
        path: STORE,
        component: Store
    },

    {
        path: PRODUCT_CARD,
        component: ProductCard
    }
];


