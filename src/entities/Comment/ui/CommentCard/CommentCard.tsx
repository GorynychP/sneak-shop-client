import { memo } from 'react';
import clsx from 'clsx';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
}

export const CommentCard = memo(({ className }: CommentCardProps) => {
    return <div className={clsx(cls.CommentCard, [className])}></div>;
});
