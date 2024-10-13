import { UserRole } from '@/entities/User';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};

export enum AppRoutes {
    MAIN = 'main',

    FOR_MEN = 'for-men',
    FOR_WOMEN = 'for-women',
    SALE = 'sale',

    PRODUCT_DETAILS_FOR_MEN = 'product-details-for-men',
    PRODUCT_DETAILS_FOR_WOMEN = 'product-details-for-women',
    PRODUCT_DETAILS_SALE = 'product-details-sale',

    PROFILE = 'profile',

    CART = 'cart',

    ORDERS = 'orders',

    ADMIN = 'admin',

    NOT_FOUND = 'not_found',
}

// Ссылка Главная
export const getRouteMain = () => '/';

export const getRouteProfile = () => '/profile';

export const getRouteMyOrders = () => '/orders';

export const getRouteForMen = () => '/ForMen';
export const getRouteForWomen = () => '/ForWomen';
export const getRouteSale = () => '/Sale';
export const getRouteForMenDetails = (id: string) => `/ForMen/${id}`;
export const getRouteForWomenDetails = (id: string) => `/ForWomen/${id}`;
export const getRouteSaleDetails = (id: string) => `/Sale/${id}`;

export const getRouteCart = () => `/cart`;

export const getRouteAdmin = () => '/admin';

export const getRouteForbidden = () => '/forbidden';
