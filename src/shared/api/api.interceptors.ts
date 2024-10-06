import axios, { CreateAxiosDefaults } from 'axios';
import { getContentType } from './api.hepler';
import { getAccessToken } from '../lib/auth/auth-token.serice';
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

export { axiosClassic, axiosWithAuth };
