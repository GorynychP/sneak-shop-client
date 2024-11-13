import { I_User } from '@/entities/User';
import { axiosClassic } from '../api/api.interceptors';
import { saveTokenStorage } from '../lib/auth/auth-token.helper';

interface IAuthResponse {
    accessToken: string;
    user: I_User;
}

export enum EnumTokens {
    'ACCESS_TOKEN' = 'accessToken',
    'REFRESH_TOKEN' = 'refreshToken',
}

class TokenService {
    async getNewTokens() {
        const response = await axiosClassic.post<IAuthResponse>('/auth/access-token');

        if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

        return response;
    }

    async getNewTokensByRefresh(refreshToken: string) {
        const response = await axiosClassic.post<IAuthResponse>(
            '/auth/access-token',
            {},
            {
                headers: {
                    Cookie: `refreshToken=${refreshToken}`,
                },
            },
        );

        return response.data;
    }
}

export default new TokenService();
