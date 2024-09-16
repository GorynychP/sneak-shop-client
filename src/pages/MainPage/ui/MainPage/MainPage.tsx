import { memo } from 'react';
import { Header } from '../components/Header/Header';
import { InfoStore } from '../components/InfoStore/InfoStore';
import { SneakersBlocks } from '@/entities/Sneakers';

const MainPage = memo(() => {
    return (
        <div className="MainPage">
            <Header />
            <SneakersBlocks />
            <InfoStore />
        </div>
    );
});

export default MainPage;
