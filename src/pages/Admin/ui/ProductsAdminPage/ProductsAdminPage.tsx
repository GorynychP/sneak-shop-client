import { memo } from 'react';
import clsx from 'clsx';
import cls from './ProductsAdminPage.module.scss';
import { Page } from '@/widgets/Page';
import { productService, ProductsTable } from '@/entities/Product';
import { useQuery } from '@tanstack/react-query';
import { PageLoader } from '@/widgets/PageLoader';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { CirclePlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ADMIN_URL } from '@/shared/constants/router';

const ProductsAdminPage = memo(() => {
    const navigate = useNavigate();
    const {
        data: products,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['products'],
        queryFn: () => productService.getAllProducts(),
    });
    if (isLoading) return <PageLoader />;
    if (isError) return <p>Something went wrong</p>;
    if (!products) return null;
    return (
        <Page padding="small" className={clsx(cls.ProductsAdminPage)}>
            <HStack align="center" justify="between">
                <h2>Все товары</h2>
                <Button onClick={() => navigate(ADMIN_URL.productCreate())} theme="accent_button">
                    <CirclePlus />
                    Добавить товар
                </Button>
            </HStack>
            <ProductsTable products={products} />
        </Page>
    );
});
export default ProductsAdminPage;
