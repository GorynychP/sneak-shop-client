import { memo } from 'react';
import clsx from 'clsx';
import cls from './Breadcrumbs.module.scss';
import { useLocation } from 'react-router-dom';
import { AppLink } from '@/shared/ui/AppLink';
import {
    getRouteCatalog,
    getRouteForMen,
    getRouteForWomen,
    getRouteMain,
    getRouteSale,
} from '@/shared/constants/router';

interface BreadcrumbsProps {
    className?: string;
    title?: string;
    productName?: string;
}

export const Breadcrumbs = memo(({ className, title, productName }: BreadcrumbsProps) => {
    const location = useLocation();

    let currentLink = '';
    const pathParts = location.pathname.split('/').filter((crumb) => crumb !== '');

    const crumbs = pathParts.map((crumb, index) => {
        currentLink += `/${crumb}`;
        const isLast = index === pathParts.length - 1;
        if (`/${crumb}` === getRouteForMen()) crumb = 'ForMen';
        if (`/${crumb}` === getRouteForWomen()) crumb = 'ForWomen';
        if (`/${crumb}` === getRouteSale()) crumb = 'Sale';
        if (`/${crumb}` === getRouteCatalog()) crumb = 'Catalog';

        const nameProduct = productName ? productName : crumb;
        return isLast ? (
            <span key={currentLink}>{title ? title : nameProduct}</span>
        ) : (
            <AppLink key={currentLink} to={currentLink} className={cls.link}>
                {title ? title : crumb}
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
