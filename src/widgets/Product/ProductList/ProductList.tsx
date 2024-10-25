import { memo } from 'react';
import clsx from 'clsx';
import cls from './ProductList.module.scss';
import { ProductCard } from '../../../entities/Product/ui/ProductCard/ProductCard';
import { I_Product } from '../../../entities/Product/model/types/product';
import { AddToFavoritesButton } from '@/features/Favorites/AddToFavoritesButton';
import { AppLink } from '@/shared/ui/AppLink';

interface ProductListProps {
    className?: string;
    products: I_Product[];
}

export const ProductList = memo((props: ProductListProps) => {
    const { className, products } = props;

    return (
        <div className={clsx(cls.ProductList, [className])}>
            {products.map((product) => (
                <AppLink key={product.id} to={product.id}>
                    <ProductCard
                        favoritesButton={<AddToFavoritesButton productId={product.id} borderNone />}
                        product={product}
                    />
                </AppLink>
            ))}
        </div>
    );
});
