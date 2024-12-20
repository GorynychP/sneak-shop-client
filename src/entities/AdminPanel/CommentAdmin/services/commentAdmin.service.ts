import { axiosWithAuth } from '@/shared/api/api.interceptors';

// Rollup при сборке в реэкспорте через index.ts видит циклическую зависимость(проблема!!!)
import { CommentService } from '@/entities/Comment/services/comment.service';
import { I_Comment } from '@/entities/Comment';

class CommentAdminService extends CommentService {
    async getAll() {
        const { data } = await axiosWithAuth.get<I_Comment[]>(this.base);
        return data;
    }
}
export const commentAdminService = new CommentAdminService();
