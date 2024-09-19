import { memo } from 'react';
import clsx from 'clsx';
import cls from './ProductList.module.scss';
import { Card } from '@/shared/ui/Card';
import { I_ProductSneakers } from '../../../model/types/sneakers';

interface ProductListProps {
    className?: string;
    products: I_ProductSneakers[];
}

export const ProductList = memo(({ className, products }: ProductListProps) => {
    return (
        <div className={clsx(cls.ProductList, [className])}>
            {products.map((product) => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    );
});
