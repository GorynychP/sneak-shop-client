import { memo } from 'react';
import clsx from 'clsx';
import cls from './CommentList.module.scss';

import { I_Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    comments?: I_Comment[];
}

export const CommentList = memo(({ className, comments }: CommentListProps) => {
    return (
        <div className={clsx(cls.CommentList, [className])}>
            {comments?.map((comment) => (
                <CommentCard comment={comment} key={comment.id} />
            ))}
        </div>
    );
});
