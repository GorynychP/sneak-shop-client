import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
};

export enum AppRoutes {
    MAIN = 'main',
    FOR_MEN = 'for-men',
    FOR_WOMEN = 'for-women',
    SALE = 'sale',

    NOT_FOUND = 'not_found',
}

// Ссылка Главная
export const getRouteMain = () => '/';

export const getRouteForMen = () => '/ForMen';
export const getRouteForWomen = () => '/ForWomen';
export const getRouteSale = () => '/sale';
export const getRouteForbidden = () => '/forbidden';
