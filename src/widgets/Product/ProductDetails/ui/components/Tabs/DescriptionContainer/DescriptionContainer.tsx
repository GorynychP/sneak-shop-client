import { memo } from 'react';
import clsx from 'clsx';
import cls from './DescriptionContainer.module.scss';

interface DescriptionContainerProps {
    className?: string;
    text?: string;
}

export const DescriptionContainer = memo(({ className, text }: DescriptionContainerProps) => {
    let content;

    if (!text) {
        content = <div>Описание отсутствует</div>;
    } else {
        content = <p className={cls.text}>{text}</p>;
    }
    return (
        <div className={clsx(cls.DescriptionContainer, [className])}>
            <h3>Описание:</h3>
            {content}
        </div>
    );
});
