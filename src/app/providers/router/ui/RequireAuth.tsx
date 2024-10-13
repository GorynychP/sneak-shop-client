import { UserRole, selectUserData } from '@/entities/User';
import { useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getRouteForbidden, getRouteMain } from '@/shared/constants/router';
import { useAppSelector } from '@/shared/model';

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
    const user = useAppSelector(selectUserData);

    const location = useLocation();

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }
        return roles.some((requiredRole) => {
            const hasRole = user?.rights?.includes(requiredRole);
            return hasRole;
        });
    }, [roles, user?.rights]);

    if (!user) {
        return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
    }
    if (!hasRequiredRoles) {
        return <Navigate to={getRouteForbidden()} state={{ from: location }} replace />;
    }
    return children;
}
