import { memo } from 'react';
import { Header } from '../components/Header/Header';
import { InfoStore } from '../components/InfoStore/InfoStore';
import { ProductSwiperBlocks } from '@/widgets/Product/ProductSwiperBlocks';
import { useQuery } from '@tanstack/react-query';
import { productService } from '@/entities/Product';

const MainPage = memo(() => {
    const {
        data: products,
        isPending,
        isError,
    } = useQuery({
        queryKey: ['products', 'popular'],
        queryFn: () => productService.getPopular({ isRating: true }),
    });
    return (
        <>
            <Header height="650px" />
            <ProductSwiperBlocks products={products} isError={isError} isLoading={isPending} />
            <InfoStore />
        </>
    );
});

export default MainPage;
