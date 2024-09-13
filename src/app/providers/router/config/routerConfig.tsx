import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import {
    AppRoutes,
    getRouteMain,
    AppRoutesProps,
    getRouteForMen,
    getRouteForWomen,
    getRouteSale,
} from '@/shared/const/router';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    // Главная страница
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.FOR_MEN]: {
        path: getRouteForMen(),
        element: <>Страница для мужских товаров</>,
    },
    [AppRoutes.FOR_WOMEN]: {
        path: getRouteForWomen(),
        element: <>Страница для женских товаров</>,
    },
    [AppRoutes.SALE]: {
        path: getRouteSale(),
        element: <>Страница Распродаж</>,
    },

    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
