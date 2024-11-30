import { AppThunk } from '@/app/providers/store/config/store';
import { queryClient } from '@/shared/api/query-client';
import { MutationObserver } from '@tanstack/react-query';
import { commentService } from '../services/comment.service';
import toast from 'react-hot-toast';

export const deleteCommentThunk =
    (id: string): AppThunk =>
    async () => {
        await new MutationObserver(queryClient, {
            mutationFn: () => {
                return commentService.delete(id);
            },
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['product'] });
                queryClient.invalidateQueries({ queryKey: ['comments'] });
                toast.success('Комментарий удалён');
            },
        }).mutate();
    };
