import { ReactElement, memo } from 'react';
import clsx from 'clsx';
import cls from './MainLayout.module.scss';
import { Background } from '@/widgets/Background';
import { useLocation } from 'react-router-dom';

interface MainLayoutProps {
    className?: string;
    header: ReactElement;
    content: ReactElement;
    sidebar?: ReactElement;
    footer?: ReactElement | null;
    right?: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
    const location = useLocation();
    const IsLocationPathHome = location.pathname === '/';
    const { content, header, sidebar, className, footer, right } = props;
    return (
        <div className={clsx(cls.MainLayout, [className])}>
            <div className={cls.header}>{header}</div>
            <div className={cls.main}>
                {sidebar && <div className={cls.sidebar}>{sidebar}</div>}
                <div className={cls.content}>
                    {!IsLocationPathHome ? <Background>{content}</Background> : content}
                </div>
                {right && <div className={cls.right}>{right}</div>}
            </div>
            {footer && <div className={cls.footer}>{footer}</div>}
        </div>
    );
});
