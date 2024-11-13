import { appStore } from '@/app/providers/store/config/store';
import axios, { CreateAxiosDefaults } from 'axios';
import { errorCatch, getContentType } from './auth.helper';
import { getAccessToken } from '../lib/auth/auth-token.helper';
import tokenService from '../services/tokenService';
import { apiAccessTokenIsBrokenEvent } from './apiAccessTokenIsBrokenEvent';
export const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const options: CreateAxiosDefaults = {
    baseURL: SERVER_URL,
    headers: getContentType(),
    withCredentials: true,
};

const axiosClassic = axios.create(options);

const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use((config) => {
    const accessToken = getAccessToken();
    if (config.headers && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

axiosWithAuth.interceptors.response.use(
    (config) => config,
    async (error) => {
        const originalRequest = error.config;
        if (
            (error?.response?.status === 401 ||
                errorCatch(error) === 'jwt expired' ||
                errorCatch(error) === 'jwt must be provided') &&
            error.config &&
            !error.config._isRetry
        ) {
            originalRequest._isRetry = true;
            try {
                await tokenService.getNewTokens();
                return axiosWithAuth.request(originalRequest);
            } catch (error) {
                console.log('errorCatch(error)', errorCatch(error));
                if (
                    errorCatch(error) === 'jwt expired' ||
                    errorCatch(error) === 'Refresh token not passed' ||
                    errorCatch(error) === 'Refresh token expired'
                )
                    appStore.dispatch(apiAccessTokenIsBrokenEvent());
            }
        }

        throw error;
    },
);

export { axiosClassic, axiosWithAuth };
