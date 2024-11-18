import { Suspense, useCallback } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { routeConfig } from '../config/routerConfig';
import { PageLoader } from '@/widgets/PageLoader';
import { AppRoutesProps } from '@/shared/constants/router';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth roles={route.roles}>{route.children ? <Outlet /> : element}</RequireAuth>
                    ) : route.children ? (
                        <Outlet />
                    ) : (
                        element
                    )
                }
            >
                {route.element && route.children && <Route index element={element} />}
                {route.children?.map((child) => (
                    <Route
                        key={child.path}
                        path={child.path}
                        element={<Suspense fallback={<PageLoader />}>{child.element}</Suspense>}
                    />
                ))}
            </Route>
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default AppRouter;
