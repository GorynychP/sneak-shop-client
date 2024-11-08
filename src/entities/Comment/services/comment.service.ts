import { axiosClassic, axiosWithAuth } from '@/shared/api/api.interceptors';
import { I_AddComment, I_Comment } from '../model/types/comment';

class CommentService {
    private base = 'reviews';

    async getAll() {
        const { data } = await axiosWithAuth.get<I_Comment[]>(this.base);
        return { comments: data };
    }
    async getAllForProductId(productId: string) {
        const { data } = await axiosClassic.get<I_Comment[]>(`${this.base}/${productId}`);
        return data || [];
    }

    async create(productId: string, body?: I_AddComment) {
        const { data } = await axiosWithAuth.post<I_AddComment>(`${this.base}/${productId}`, body);
        return { comments: data };
    }
    async delete(id: string) {
        await axiosWithAuth.delete<{ id: string }>(`${this.base}/${id}`);
    }
}
export const commentService = new CommentService();
