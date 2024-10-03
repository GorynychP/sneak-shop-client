import { memo } from 'react';
import clsx from 'clsx';
import cls from './StatusTag.module.scss';

interface StatusTagProps {
    className?: string;
    text: string;
}

export const StatusTag = memo(({ className, text }: StatusTagProps) => {
    return (
        <div className={clsx(cls.StatusTag, [className])}>
            <svg
                className={cls.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
            >
                <circle cx="12" cy="12" r="10" fill="none" className={cls.customStroke} strokeWidth="2" />
                <path d="M7 12l3 3 7-7" fill="none" className={cls.customStrokeCheck} strokeWidth="2" />
            </svg>
            <p>{text}</p>
        </div>
    );
});
