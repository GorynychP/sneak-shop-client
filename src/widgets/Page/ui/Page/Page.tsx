import { memo } from 'react';
import clsx from 'clsx';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: React.ReactNode;
}

export const Page = memo(({ className, children }: PageProps) => {
    return <main className={clsx(cls.Page, [className])}>{children}</main>;
});
