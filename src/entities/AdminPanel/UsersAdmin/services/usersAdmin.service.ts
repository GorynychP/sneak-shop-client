import { axiosWithAuth } from '@/shared/api/api.interceptors';
import { I_User, UserRole } from '@/entities/User/model/types/user';

// Rollup при сборке в реэкспорте через index.ts видит циклическую зависимость(проблема!??)
import { UserService } from '@/entities/User/services/user.service';

class UsersAdminService extends UserService {
    async getAllUsers() {
        const { data } = await axiosWithAuth<I_User[]>({
            url: 'users/list',
            method: 'GET',
        });
        return data;
    }
    async changeRole(userId: string, rights: UserRole[]) {
        const { data } = await axiosWithAuth<I_User>({
            url: `users/edit/${userId}`,
            method: 'PATCH',
            data: { rights },
        });
        return data;
    }
}

export const userAdminService = new UsersAdminService();
