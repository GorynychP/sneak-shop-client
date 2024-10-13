import { axiosWithAuth } from '@/shared/api/api.interceptors';
import { I_User } from '../model/types/user';

class UserService {
    async getProfile() {
        const { data } = await axiosWithAuth<I_User>({
            url: 'users/profile',
            method: 'GET',
        });

        return data;
    }

    async toggleFavorite(productId: string) {
        return axiosWithAuth<I_User>({
            url: `users/profile/favorites/${productId}`,
            method: 'PATCH',
        });
    }
}

export const userService = new UserService();
