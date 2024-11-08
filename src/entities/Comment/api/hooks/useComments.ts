import { useQuery } from '@tanstack/react-query';
import { commentService } from '../../services/comment.service';
import { useParams } from 'react-router-dom';
import { I_Comment } from '../../model/types/comment';

export const useCommentsForProduct = () => {
    const params = useParams();
    const { data: comments } = useQuery<I_Comment[]>({
        queryKey: ['comments', { id: params.id }],
        queryFn: () => commentService.getAllForProductId(params.id || ''),
    });
    return { comments };
};
