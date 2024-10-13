import { axiosClassic } from '@/shared/api/api.interceptors';
import { LoginFormSchema } from '../lib/formSchema/loginFormSchema';
import { RegFormSchema } from '../lib/formSchema/regFormSchema';
import { I_AuthResponse } from '../model/types/auth';
import { removeFromStorage, saveTokenStorage } from '@/shared/lib/auth/auth-token.serice';

class AuthService {
    async login(data: LoginFormSchema) {
        const response = await axiosClassic<I_AuthResponse>({
            method: 'POST',
            url: '/auth/login',
            data,
        });
        if (response.data.accessToken) {
            saveTokenStorage(response.data.accessToken);
        }
        return response.data.user;
    }

    async register(data: RegFormSchema) {
        const response = await axiosClassic<I_AuthResponse>({
            method: 'POST',
            url: '/auth/register',
            data: { name: data.email, email: data.email, password: data.password },
        });

        if (response.data.accessToken) {
            saveTokenStorage(response.data.accessToken);
        }
        return response.data.user;
    }
    async logout() {
        const response = await axiosClassic<boolean>({
            url: '/auth/logout',
            method: 'POST',
        });

        if (response.data) removeFromStorage();

        return response;
    }
}

export const authService = new AuthService();
