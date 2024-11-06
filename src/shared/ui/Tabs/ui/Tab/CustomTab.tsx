import { ForwardedRef, forwardRef, HtmlHTMLAttributes } from 'react';
import clsx from 'clsx';
import cls from './CustomTab.module.scss';

interface CustomTabProps {
    className?: string;
    props: HtmlHTMLAttributes<HTMLButtonElement>;
}

export const CustomTab = forwardRef(
    ({ className, ...props }: CustomTabProps, ref: ForwardedRef<HTMLButtonElement>) => {
        return <button ref={ref} {...props} className={clsx(cls.Tab, [className])} />;
    },
);
