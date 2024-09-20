import { memo } from 'react';
import clsx from 'clsx';
import cls from './Existence.module.scss';

interface ExistenceProps {
    className?: string;
}

export const Existence = memo(({ className }: ExistenceProps) => {
    return (
        <div className={clsx(cls.Existence, [className])}>
            <svg
                className={cls.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
            >
                <circle cx="12" cy="12" r="10" fill="none" className={cls.customStroke} stroke-width="2" />
                <path d="M7 12l3 3 7-7" fill="none" className={cls.customStrokeCheck} stroke-width="2" />
            </svg>
            <p>в наличии</p>
        </div>
    );
});
