import { memo } from 'react';
import clsx from 'clsx';
import cls from './CommentCard.module.scss';
import { I_Comment } from '../../model/types/comment';
import { HStack } from '@/shared/ui/Stack';
import AccountImage from '@/shared/assets/icon/account.svg';
import { dataFormatter } from '@/shared/lib/utils/format/formatData';
import DeleteImage from '@/shared/assets/icon/trash-solid.svg?react';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import { deleteCommentThunk } from '../../api/deleteCommentThunk';
import { selectIsUserAdmin, selectUserData } from '@/entities/User';
import { StarRating } from '@/shared/ui/StarRating';

interface CommentCardProps {
    className?: string;
    comment: I_Comment;
}

export const CommentCard = memo(({ className, comment }: CommentCardProps) => {
    const user = useAppSelector(selectUserData);
    const isUserAdmin = useAppSelector(selectIsUserAdmin);
    const isShow = isUserAdmin || user?.id === comment?.userId;

    const dispatch = useAppDispatch();
    return (
        <div className={clsx(cls.CommentCard, [className])}>
            <HStack align="center" gap="12" justify="between">
                <StarRating size={24} fixed selectedStars={comment.rating} />

                {isShow && (
                    <DeleteImage
                        onClick={() => dispatch(deleteCommentThunk(comment.id))}
                        width={18}
                        height={18}
                        className={cls.deleteComment}
                    />
                )}
            </HStack>
            <div className={cls.comment}>{comment.text}</div>
            <div className={cls.infoUser}>
                <img src={AccountImage} alt="avatar" width={25} height={25} />
                <span>{comment?.user?.name}</span>
                <span>{dataFormatter(comment?.createdAt)}</span>
            </div>
        </div>
    );
});
