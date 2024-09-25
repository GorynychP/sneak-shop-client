import { memo, ReactElement } from 'react';
import clsx from 'clsx';
import cls from './ProductList.module.scss';
import { ProductCard } from '@/entities/Product/';
import { I_Product } from '../../model/types/sneakers';

interface ProductListProps {
    className?: string;
    products: I_Product[];
    favoritesButton: ReactElement;
}

export const ProductList = memo(({ className, products, favoritesButton }: ProductListProps) => {
    return (
        <div className={clsx(cls.ProductList, [className])}>
            {products.map((product) => (
                <ProductCard favoritesButton={favoritesButton} key={product.id} product={product} />
            ))}
        </div>
    );
});
