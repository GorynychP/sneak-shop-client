import { CartPage } from '@/pages/CartPage';
import { CatalogPage } from '@/pages/CatalogPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { OrdersPage } from '@/pages/OrdersPage';
import { ProductDetailsPage } from '@/pages/ProductDetailsPage';
import { ProfilePage } from '@/pages/ProfilePage';
import {
    AppRoutes,
    getRouteMain,
    AppRoutesProps,
    getRouteForMen,
    getRouteForWomen,
    getRouteSale,
    getRouteForMenDetails,
    getRouteForWomenDetails,
    getRouteSaleDetails,
    getRouteCart,
    getRouteProfile,
    getRouteMyOrders,
} from '@/shared/const/router';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    // Главная страница
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },

    [AppRoutes.PROFILE]: {
        path: getRouteProfile(),
        element: <ProfilePage />,
    },

    [AppRoutes.ORDERS]: {
        path: getRouteMyOrders(),
        element: <OrdersPage />,
    },

    [AppRoutes.FOR_MEN]: {
        path: getRouteForMen(),
        element: <CatalogPage />,
    },
    [AppRoutes.FOR_WOMEN]: {
        path: getRouteForWomen(),
        element: <CatalogPage />,
    },
    [AppRoutes.SALE]: {
        path: getRouteSale(),
        element: <CatalogPage />,
    },

    [AppRoutes.PRODUCT_DETAILS_FOR_MEN]: {
        path: getRouteForMenDetails(':id'),
        element: <ProductDetailsPage />,
    },
    [AppRoutes.PRODUCT_DETAILS_FOR_WOMEN]: {
        path: getRouteForWomenDetails(':id'),
        element: <ProductDetailsPage />,
    },
    [AppRoutes.PRODUCT_DETAILS_SALE]: {
        path: getRouteSaleDetails(':id'),
        element: <ProductDetailsPage />,
    },

    [AppRoutes.CART]: {
        path: getRouteCart(),
        element: <CartPage />,
    },

    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
