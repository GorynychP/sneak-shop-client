import { memo, useCallback } from 'react';
import clsx from 'clsx';
import cls from './AddCommentForm.module.scss';
import { Button } from '@/shared/ui/Button';
import { useAddCommentAction } from '../../model/hooks/useAddCommentAction';
import { createCommentThunk } from '../../api/createCommentThunk';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import { StarRating } from '@/shared/ui/StarRating';

interface AddCommentFormProps {
    className?: string;
}

export const AddCommentForm = memo(({ className }: AddCommentFormProps) => {
    const text = useAppSelector((state) => state.addComment.text);
    const rating = useAppSelector((state) => state.addComment.rating);
    const { setTextComment, setRatingComment } = useAddCommentAction();
    const dispatch = useAppDispatch();
    const onChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setTextComment(e.target.value);
    };
    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setRatingComment(selectedStarsCount);
        },
        [setRatingComment],
    );
    const onSubmit = () => {
        dispatch(createCommentThunk());
    };
    return (
        <div className={clsx(cls.AddCommentForm, [className])}>
            <StarRating size={30} selectedStars={rating} onSelect={onSelectStars} />
            <textarea
                value={text}
                placeholder="Ваш комментарий"
                onChange={onChangeComment}
                className={cls.commentField}
                name="comment"
            />
            <Button onClick={onSubmit} className={cls.commentButton} theme="accent_button">
                Отправить
            </Button>
        </div>
    );
});
