import { memo } from 'react';
import clsx from 'clsx';
import cls from './Page.module.scss';

type T_Padding = 'none' | 'small' | 'normal' | 'large';
interface PageProps {
    className?: string;
    children: React.ReactNode;
    padding?: T_Padding;
}

export const Page = memo(({ className, children, padding = 'normal' }: PageProps) => {
    return <main className={clsx(cls.Page, { [cls[padding]]: padding }, [className])}>{children}</main>;
});
