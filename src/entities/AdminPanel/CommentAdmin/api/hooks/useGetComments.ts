import { I_Comment } from '@/entities/Comment';
import { useQuery } from '@tanstack/react-query';
import { commentAdminService } from '../../services/commentAdmin.service';

export const useGetComments = () => {
    const {
        data: comments,
        isLoading,
        isError,
    } = useQuery<I_Comment[]>({
        queryKey: ['comments'],
        queryFn: () => commentAdminService.getAll(),
        // retry: false,
    });

    return { comments, isLoading, isError };
};
