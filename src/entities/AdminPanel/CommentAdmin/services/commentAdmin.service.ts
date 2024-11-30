import { axiosWithAuth } from '@/shared/api/api.interceptors';
import { CommentService, I_Comment } from '@/entities/Comment';

class CommentAdminService extends CommentService {
    async getAll() {
        const { data } = await axiosWithAuth.get<I_Comment[]>(this.base);
        return data;
    }
}
export const commentAdminService = new CommentAdminService();
