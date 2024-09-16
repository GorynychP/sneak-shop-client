import { memo } from 'react';
import clsx from 'clsx';
import cls from './Breadcrumbs.module.scss';
import { useLocation } from 'react-router-dom';
import { AppLink } from '@/shared/ui/AppLink';
import { getRouteMain } from '@/shared/const/router';

interface BreadcrumbsProps {
    className?: string;
}

export const Breadcrumbs = memo(({ className }: BreadcrumbsProps) => {
    const location = useLocation();

    let currentLink = '';

    const pathParts = location.pathname.split('/').filter((crumb) => crumb !== '');

    const crumbs = pathParts.map((crumb, index) => {
        currentLink += `/${crumb}`;
        const isLast = index === pathParts.length - 1;

        return isLast ? (
            <span key={currentLink}>{crumb}</span>
        ) : (
            <AppLink key={currentLink} to={currentLink} className={cls.link}>
                {crumb}
            </AppLink>
        );
    });
    return (
        <div className={clsx(cls.Breadcrumb, [className])}>
            <AppLink to={getRouteMain()} className={cls.link}>
                SneakShop
            </AppLink>
            {crumbs}
        </div>
    );
});
