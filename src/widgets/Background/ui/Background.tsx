import { memo, ReactNode } from 'react';
import clsx from 'clsx';
import cls from './Background.module.scss';
import { useLocation } from 'react-router-dom';

interface BackgroundProps {
    className?: string;
    children: ReactNode;
    height?: string;
}

export const Background = memo(({ className, children, height = '100%' }: BackgroundProps) => {
    const location = useLocation();
    const IsLocationPathHome = location.pathname === '/';
    const background1 = IsLocationPathHome ? 'var(--bg-light)' : 'var(--bg-light-30)';
    const background2 = IsLocationPathHome ? 'var(--bg-dark)' : 'var(--bg-dark-30)';
    return (
        <div className={clsx(cls.Background, [className])}>
            <div style={{ height, background: background1 }} className={cls.background1}></div>
            <div
                style={{ height: IsLocationPathHome ? '590px' : '100%', background: background2 }}
                className={cls.background2}
            ></div>
            {children}
        </div>
    );
});
