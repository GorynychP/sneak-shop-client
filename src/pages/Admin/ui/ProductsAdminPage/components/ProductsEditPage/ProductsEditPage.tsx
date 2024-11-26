import { memo } from 'react';
import clsx from 'clsx';
import cls from './ProductsEditPage.module.scss';
import { ProductEdit } from '@/entities/Product';
import { Page } from '@/widgets/Page';

interface ProductsEditPageProps {
    className?: string;
}

export const ProductsEditPage = memo(({ className }: ProductsEditPageProps) => {
    return (
        <Page padding="small" className={clsx(cls.ProductsEditPage, [className])}>
            <ProductEdit />
        </Page>
    );
});

export default ProductsEditPage;
