import Cookies from 'js-cookie';
const APP_DOMAIN = import.meta.env.VITE_APP_DOMAIN;

export enum EnumTokens {
    'ACCESS_TOKEN' = 'accessToken',
    'REFRESH_TOKEN' = 'refreshToken',
}

export const getAccessToken = () => {
    const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN);
    return accessToken || null;
};

export const saveTokenStorage = (accessToken: string) => {
    Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
        domain: APP_DOMAIN,
        sameSite: 'strict',
        expires: 1,
    });
};

export const removeFromStorage = () => {
    Cookies.remove(EnumTokens.ACCESS_TOKEN);
};
