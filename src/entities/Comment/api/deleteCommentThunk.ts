import { AppThunk } from '@/app/providers/store/config/store';
import { queryClient } from '@/shared/api/query-client';
import { MutationObserver } from '@tanstack/react-query';
import { commentService } from '../services/comment.service';

export const deleteCommentThunk =
    (id: string): AppThunk =>
    async () => {
        await new MutationObserver(queryClient, {
            mutationFn: () => {
                return commentService.delete(id);
            },
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['product'] });
            },
        }).mutate();
    };
