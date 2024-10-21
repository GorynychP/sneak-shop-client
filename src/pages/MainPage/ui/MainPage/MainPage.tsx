import { memo } from 'react';
import { Header } from '../components/Header/Header';
import { InfoStore } from '../components/InfoStore/InfoStore';
import { ProductSwiperBlocks } from '@/widgets/Product/ProductSwiperBlocks';
// import { useProducts } from '@/entities/Product';
import { useManageProductsQuery } from '@/entities/Product/lib/hooks/useManageProductsQuery';

const MainPage = memo(() => {
    const { products, isPending, isError } = useManageProductsQuery(30);
    return (
        <>
            <Header height="650px" />
            <ProductSwiperBlocks products={products} isError={isError} isLoading={isPending} />
            <InfoStore />
        </>
    );
});

export default MainPage;
