import { memo } from 'react';
import { ProductForm } from '../components/ProductForm/ProductForm';
import { I_Product } from '../../model/types/product';
import clsx from 'clsx';
import cls from './ProductEdit.module.scss';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { productService } from '../../services/product.service';
interface ProductEditProps {
    className?: string;
}

export const ProductEdit = memo(({ className }: ProductEditProps) => {
    const params = useParams<{ id: string }>();

    const { data: product } = useQuery<I_Product>({
        queryKey: ['product', params.id],
        queryFn: () => productService.getById(params.id || ''),
        enabled: !!params.id,
        staleTime: 0,
    });

    return (
        <div className={clsx(cls.ProductEdit, [className])}>
            <ProductForm product={product} />
        </div>
    );
});
