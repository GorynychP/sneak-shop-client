import { memo } from 'react';
import clsx from 'clsx';
import cls from './ProductList.module.scss';
import { ProductCard } from '../../../entities/Product/ui/ProductCard/ProductCard';
import { I_Product } from '../../../entities/Product/model/types/product';
import { AddToFavoritesButton } from '@/features/Favorites/AddToFavoritesButton';

interface ProductListProps {
    className?: string;
    products: I_Product[];
}

export const ProductList = memo((props: ProductListProps) => {
    const { className, products } = props;

    return (
        <div className={clsx(cls.ProductList, [className])}>
            {products.map((product) => (
                <ProductCard
                    favoritesButton={<AddToFavoritesButton productId={product.id} borderNone />}
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
});
