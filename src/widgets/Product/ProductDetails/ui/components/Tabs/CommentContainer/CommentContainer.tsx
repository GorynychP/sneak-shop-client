import { memo, useEffect } from 'react';
import clsx from 'clsx';
import cls from './CommentContainer.module.scss';
import { CommentList, I_Comment } from '@/entities/Comment';
import { AddCommentForm, useAddCommentAction } from '@/features/comment';
import { useAppSelector } from '@/shared/model';
import { selectUserAuthInited } from '@/entities/User';

interface CommentContainerProps {
    className?: string;
    comments?: I_Comment[];
}

export const CommentContainer = memo(({ className, comments }: CommentContainerProps) => {
    const isAuth = useAppSelector(selectUserAuthInited);
    const { reset } = useAddCommentAction();

    useEffect(() => {
        reset();
    }, [reset]);

    let content;

    if (!comments) {
        return null;
    } else if (comments.length === 0) {
        content = <div>Отзывов пока еще нет</div>;
    } else {
        content = <CommentList comments={comments} />;
    }

    return (
        <div className={clsx(cls.CommentContainer, [className])}>
            {isAuth ? (
                <AddCommentForm />
            ) : (
                <div className={cls.noAuth}>
                    <h3>Для того, чтобы оставить отзыв, нужно авторизоваться</h3>
                </div>
            )}
            <h3>Отзывы:</h3>
            {content}
        </div>
    );
});
