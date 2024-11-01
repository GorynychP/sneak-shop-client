import { UserRole } from '@/entities/User';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};

export enum AppRoutes {
    MAIN = 'main',

    CATALOG = 'catalog',

    FOR_MEN = 'for-men',
    FOR_WOMEN = 'for-women',
    SALE = 'sale',

    PRODUCT_DETAILS_FOR_MEN = 'product-details-for-men',
    PRODUCT_DETAILS_FOR_WOMEN = 'product-details-for-women',
    PRODUCT_DETAILS_SALE = 'product-details-sale',
    PRODUCT_DETAILS = 'product-details',

    PROFILE = 'profile',

    CART = 'cart',

    ORDERS = 'orders',

    ADMIN = 'admin',

    NOT_FOUND = 'not_found',
}

// Ссылка Главная
export const getRouteMain = () => '/';

export const getRouteProfile = () => '/profile';

export const getRouteCatalog = () => '/catalog';

export const getRouteProductDetails = (id: string) => `/catalog/${id}`;

export const getRouteMyOrders = () => '/orders';

export const getRouteForMen = () => '/men';
export const getRouteForWomen = () => '/women';
export const getRouteSale = () => '/sale';
export const getRouteForMenDetails = (id: string) => `/men/${id}`;
export const getRouteForWomenDetails = (id: string) => `/women/${id}`;
export const getRouteSaleDetails = (id: string) => `/sale/${id}`;

export const getRouteCart = () => `/cart`;

export const getRouteAdmin = () => '/admin';

export const getRouteForbidden = () => '/forbidden';