import { memo } from 'react';
import clsx from 'clsx';
import cls from './TableAllComments.module.scss';
import { DataTable } from '@/shared/ui/DataTable/DataTable';
import { commentColumns, I_CommentColumn } from '../components/CommentColumn/CommentColumn';
import { I_Comment } from '@/entities/Comment';
import { formatData } from '@/shared/lib/utils/format/formatData';

interface TableAllCommentsProps {
    className?: string;
    comments: I_Comment[];
}

export const TableAllComments = memo(({ className, comments }: TableAllCommentsProps) => {
    const formattedComments: I_CommentColumn[] = comments
        ? comments.map((comment) => ({
              id: comment.id,
              createdAt: formatData(comment.createdAt),
              text: comment.text,
              user: comment.user,
              rating: comment.rating,
              productId: comment?.productId,
          }))
        : [];

    return (
        <div className={clsx(cls.TableAllComments, [className])}>
            <DataTable columns={commentColumns} data={formattedComments} filterKey="user" />
        </div>
    );
});
