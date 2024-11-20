import { UserRole } from '@/entities/User';
import {
    ReviewAdminPage,
    ProductsAdminPage,
    StatisticsAdminPage,
    UsersAdminPage,
    ProductsEditPage,
} from '@/pages/Admin';
import { CartPage } from '@/pages/CartPage';
import { CatalogPage } from '@/pages/CatalogPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { OrdersPage } from '@/pages/OrdersPage';
import { ProductDetailsPage } from '@/pages/ProductDetailsPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ThanksPage } from '@/pages/ThanksPage';
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
    getRouteCatalog,
    getRouteProductDetails,
    getRouteThanks,
    ADMIN_URL,
} from '@/shared/constants/router';
// import { createBrowserRouter } from 'react-router-dom';
// createBrowserRouter
export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    // Главная страница
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },

    [AppRoutes.PROFILE]: {
        path: getRouteProfile(),
        element: <ProfilePage />,
        authOnly: true,
    },

    [AppRoutes.CATALOG]: {
        path: getRouteCatalog(),
        element: <CatalogPage />,
    },

    [AppRoutes.ORDERS]: {
        path: getRouteMyOrders(),
        element: <OrdersPage />,
        authOnly: true,
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
    [AppRoutes.PRODUCT_DETAILS]: {
        path: getRouteProductDetails(':id'),
        element: <ProductDetailsPage />,
    },

    [AppRoutes.CART]: {
        path: getRouteCart(),
        element: <CartPage />,
    },

    [AppRoutes.ADMIN]: {
        path: ADMIN_URL.root(),
        element: <>Админ Панель</>,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
        children: [
            { path: ADMIN_URL.statistics(), element: <StatisticsAdminPage /> },
            { path: ADMIN_URL.products(), element: <ProductsAdminPage /> },
            { path: ADMIN_URL.productCreate(), element: <ProductsEditPage /> },
            { path: ADMIN_URL.productEdit(':id'), element: <ProductsEditPage /> },
            { path: ADMIN_URL.reviews(), element: <ReviewAdminPage /> },
            { path: ADMIN_URL.users(), element: <UsersAdminPage /> },
        ],
    },

    [AppRoutes.THANKS]: {
        path: getRouteThanks(),
        element: <ThanksPage />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
