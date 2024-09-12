import { memo } from 'react';
import clsx from 'clsx';
import cls from './MainPage.module.scss';
import { Header } from '../components/Header/Header';

interface MainPageProps {
    className?: string;
}

const MainPage = memo(({ className }: MainPageProps) => {
    return (
        <div className={clsx(cls.MainPage, [className])}>
            <Header />
        </div>
    );
});

export default MainPage;
