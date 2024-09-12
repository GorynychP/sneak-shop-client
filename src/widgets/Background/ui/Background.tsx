import { memo, ReactNode } from 'react';
import clsx from 'clsx';
import cls from './Background.module.scss';
import { useLocation } from 'react-router-dom';

interface BackgroundProps {
    className?: string;
    children: ReactNode;
    height?: string;
}

export const Background = memo(({ className, children, height = '100vh' }: BackgroundProps) => {
    const location = useLocation();
    const IsLocationPathHome = location.pathname === '/';
    const background1 = IsLocationPathHome ? 'var(--bg-light)' : 'var(--bg-light-30)';
    const background2 = IsLocationPathHome ? 'var(--bg-dark)' : 'var(--bg-dark-30)';
    return (
        <div style={{ height, background: background1 }} className={clsx(cls.Background, [className])}>
            <div
                style={{ height: height !== '100vh' ? '590px' : '100vh', background: background2 }}
                className={cls.background2}
            >
                {children}
            </div>
        </div>
    );
});
