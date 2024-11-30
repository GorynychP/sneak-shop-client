import { useMutation } from '@tanstack/react-query';
import { commentAdminService } from '../../services/commentAdmin.service';
import { queryClient } from '@/shared/api/query-client';
import toast from 'react-hot-toast';

export const useDeleteComment = (commentId: string) => {
    const { mutate: deleteComment } = useMutation({
        mutationFn: () => {
            return commentAdminService.delete(commentId);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['comments'] });
            toast.success('Комментарий удалён');
        },
    });
    return { deleteComment };
};
