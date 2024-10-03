import { memo } from 'react';
import { Header } from '../components/Header/Header';
import { InfoStore } from '../components/InfoStore/InfoStore';
import { ProductSwiperBlocks } from '@/widgets/Product/ProductSwiperBlocks';
import { sneakersData } from '@/entities/Product';

const MainPage = memo(() => {
    const products = sneakersData;
    return (
        <>
            <Header height="650px" />
            <ProductSwiperBlocks products={products} />
            <InfoStore />
        </>
    );
});

export default MainPage;
