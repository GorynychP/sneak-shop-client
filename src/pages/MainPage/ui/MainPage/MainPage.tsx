import { memo } from 'react';
import { Header } from '../components/Header/Header';
import { InfoStore } from '../components/InfoStore/InfoStore';
import { ProductSwiperBlocks } from '@/widgets/Product/ProductSwiperBlocks';

const MainPage = memo(() => {
    return (
        <div className="MainPage">
            <Header height="650px" />
            <ProductSwiperBlocks />
            <InfoStore />
        </div>
    );
});

export default MainPage;
