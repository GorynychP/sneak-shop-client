import { memo } from 'react';
import clsx from 'clsx';
import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

const MainPage = memo(({ className }: MainPageProps) => {
    return <div className={clsx(cls.MainPage, [className])}>Главная страница</div>;
});

export default MainPage;
