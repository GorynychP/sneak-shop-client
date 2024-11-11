import { AppThunk } from '@/app/providers/store/config/store';
import { commentService } from '@/entities/Comment';
import { queryClient } from '@/shared/api/query-client';
import { MutationObserver } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { addCommentActions } from '../model/slice/addCommentSlice';

export const createCommentThunk = (): AppThunk => async (dispatch, getState) => {
    const productId = getState().addComment.productId;
    const comment = getState().addComment.text;
    const rating = getState().addComment.rating;

    if (comment === '') {
        toast('Комментарий не может быть пустым');
        return;
    }

    if (rating === 0) {
        toast('Поставьте свою оценку');
        return;
    }

    new MutationObserver(queryClient, {
        mutationFn: () => {
            return commentService.create(productId, {
                text: comment,
                rating,
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['product'] });
            toast.success('Комментарий успешно добавлен');
            dispatch(addCommentActions.reset());
        },
    }).mutate();
};
