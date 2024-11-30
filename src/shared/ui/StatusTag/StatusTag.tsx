import { memo } from 'react';
import clsx from 'clsx';
import cls from './StatusTag.module.scss';

interface StatusTagProps {
    className?: string;
    text: string;
    isCompleted?: boolean;
    imageComponent?: React.ReactNode;
}

export const StatusTag = memo(({ className, text, isCompleted = true, imageComponent }: StatusTagProps) => {
    return (
        <div className={clsx(cls.StatusTag, [className])}>
            {isCompleted && (
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
            )}
            {imageComponent}
            <p className={clsx(cls.text, { [cls.completed]: !isCompleted })}>{text}</p>
        </div>
    );
});
