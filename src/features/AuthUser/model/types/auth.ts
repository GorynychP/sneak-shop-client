import { I_User } from '@/entities/User';

export interface I_AuthForm {
    name: string;
    email: Email;
    password: string;
}
export interface I_AuthResponse {
    user: I_User;
    accessToken: string;
}
