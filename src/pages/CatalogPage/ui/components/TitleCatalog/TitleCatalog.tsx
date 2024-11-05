import { memo } from 'react';
import clsx from 'clsx';
import cls from './TitleCatalog.module.scss';
import { useLocation } from 'react-router-dom';
import { getRouteForMen, getRouteForWomen, getRouteSale } from '@/shared/constants/router';

interface TitleCatalogProps {
    className?: string;
    countProduct?: number;
}

export const TitleCatalog = memo(({ className, countProduct }: TitleCatalogProps) => {
    const { pathname } = useLocation();

    const titleCatalog =
        pathname === getRouteForMen()
            ? 'FOR MEN'
            : pathname === getRouteForWomen()
            ? 'FOR WOMEN'
            : pathname === getRouteSale()
            ? 'SALE'
            : '';
    return (
        <div className={clsx(cls.TitleCatalog, [className])}>
            <h3>{titleCatalog === 'SALE' ? titleCatalog : `SNEAKERS ${titleCatalog}`}</h3>
            {countProduct && <p> {`( ${countProduct} товара )`}</p>}
        </div>
    );
});
