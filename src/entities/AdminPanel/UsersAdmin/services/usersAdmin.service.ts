import { axiosWithAuth } from '@/shared/api/api.interceptors';
import { I_User } from '@/entities/User/model/types/user';

import { I_Profile } from '@/entities/Profile';

class UsersAdminService {
    async getAllUsers() {
        const { data } = await axiosWithAuth<I_User[]>({
            url: 'users/list',
            method: 'GET',
        });
        console.log('data', data);
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

    async toggleRole(productId: string) {
        return axiosWithAuth<I_User>({
            url: `users/profile/favorites/${productId}`,
            method: 'PATCH',
        });
    }
}

export const userAdminService = new UsersAdminService();
