import { memo } from 'react';
import clsx from 'clsx';
import cls from './TitleCatalog.module.scss';
import { useLocation } from 'react-router-dom';

interface TitleCatalogProps {
    className?: string;
    countProduct?: number;
}

export const TitleCatalog = memo(({ className, countProduct }: TitleCatalogProps) => {
    const { pathname } = useLocation();
    const title = pathname.split('/')[1];
    const titleCatalog =
        title === 'ForMen' ? 'FOR MEN' : title === 'ForWomen' ? 'FOR WOMEN' : title === 'Sale' ? 'SALE' : '';
    return (
        <div className={clsx(cls.TitleCatalog, [className])}>
            <h3>{titleCatalog === 'SALE' ? titleCatalog : `SNEAKERS ${titleCatalog}`}</h3>
            {countProduct && <p> {`( ${countProduct} товара )`}</p>}
        </div>
    );
});
