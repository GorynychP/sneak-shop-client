import { memo } from 'react';
import clsx from 'clsx';
import cls from './AddCommentForm.module.scss';
import { Button } from '@/shared/ui/Button';
import { useAddCommentAction } from '../../model/hooks/useAddCommentAction';
import { createComment } from '../../api/createComment';
import { useAppDispatch, useAppSelector } from '@/shared/model';

interface AddCommentFormProps {
    className?: string;
}

export const AddCommentForm = memo(({ className }: AddCommentFormProps) => {
    const text = useAppSelector((state) => state.addComment.text);
    const { setTextComment, setRatingComment } = useAddCommentAction();
    const dispatch = useAppDispatch();
    const onChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setTextComment(e.target.value);
    };
    const onSubmit = () => {
        setRatingComment(2);
        dispatch(createComment());
    };
    return (
        <div className={clsx(cls.AddCommentForm, [className])}>
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
