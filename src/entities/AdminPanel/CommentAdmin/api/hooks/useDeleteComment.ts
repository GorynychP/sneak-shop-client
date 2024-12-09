import { useMutation } from '@tanstack/react-query';
import { commentAdminService } from '../../services/commentAdmin.service';
import { queryClient } from '@/shared/api/query-client';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';
export const useDeleteComment = (commentId: string) => {
    const { mutate: deleteComment } = useMutation({
        mutationFn: () => {
            return commentAdminService.delete(commentId);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['comments'] });
            toast.success('Комментарий удалён');
        },

        onError(error: AxiosError<{ message: string }>) {
            const message = error?.response?.data?.message;
            toast.error(`Ошибка при удалении комментария:${message}`);
        },
    });
    return { deleteComment };
};
