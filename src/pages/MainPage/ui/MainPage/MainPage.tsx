import { memo } from 'react';
import clsx from 'clsx';
import cls from './MainPage.module.scss';
import { Header } from '../components/Header/Header';
import { CardBlock } from '../components/CardBlock/CardBlock';
import { InfoStore } from '../components/InfoStore/InfoStore';

interface MainPageProps {
    className?: string;
}

const MainPage = memo(({ className }: MainPageProps) => {
    return (
        <div className={clsx(cls.MainPage, [className])}>
            <Header />
            <CardBlock title="SALE" />
            <CardBlock title="FOR MEN" />
            <CardBlock title="FOR WOMEN" />
            <InfoStore />
        </div>
    );
});

export default MainPage;
