import { memo } from 'react';
import clsx from 'clsx';
import cls from './CommentContainer.module.scss';
import { I_Comment } from '@/entities/Comment';

interface CommentContainerProps {
    className?: string;
    comments?: I_Comment[];
}

export const CommentContainer = memo(({ className, comments }: CommentContainerProps) => {
    let content;

    if (!comments) {
        return null;
    } else if (comments.length === 0) {
        content = <div>Отзывов пока еще нет</div>;
    } else {
        content = (
            <>
                {comments.map((comment) => (
                    <div key={comment.id}>
                        <p>{comment.text}</p>
                    </div>
                ))}
            </>
        );
    }

    return (
        <div className={clsx(cls.CommentContainer, [className])}>
            <h3>Отзывы:</h3>
            {content}
        </div>
    );
});
