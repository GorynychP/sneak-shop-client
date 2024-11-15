import { axiosWithAuth } from '@/shared/api/api.interceptors';
import { I_User } from '../model/types/user';
import { I_Profile } from '@/entities/Profile';

class UserService {
    async getProfile() {
        const { data } = await axiosWithAuth<I_Profile>({
            url: 'users/profile',
            method: 'GET',
        });

        return data;
    }
    async getUser() {
        const { data } = await axiosWithAuth<I_User>({
            url: 'users/profile',
            method: 'GET',
        });

        return data;
    }
    async updateProfile(data?: I_Profile) {
        const { data: profile } = await axiosWithAuth<I_Profile>({
            url: 'users/profile',
            method: 'PATCH',
            data,
        });

        return profile;
    }

    async toggleFavorite(productId: string) {
        return axiosWithAuth<I_User>({
            url: `users/profile/favorites/${productId}`,
            method: 'PATCH',
        });
    }
}

export const userService = new UserService();
