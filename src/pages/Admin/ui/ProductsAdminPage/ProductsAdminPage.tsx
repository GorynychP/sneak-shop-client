import { memo } from 'react';
import clsx from 'clsx';
import cls from './ProductsAdminPage.module.scss';
import { Page } from '@/widgets/Page';
import { productService, ProductsTable } from '@/entities/Product';
import { useQuery } from '@tanstack/react-query';

const ProductsAdminPage = memo(() => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['products'],
        queryFn: () => productService.getAll(),
    });
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Something went wrong</p>;
    if (!data) return null;
    return (
        <Page padding="small" className={clsx(cls.ProductsAdminPage)}>
            <h2>Все товары</h2>
            <ProductsTable products={data?.items} />
        </Page>
    );
});
export default ProductsAdminPage;
