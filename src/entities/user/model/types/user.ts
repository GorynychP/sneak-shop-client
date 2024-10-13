export enum UserRole {
    USER = 'USER',
    PREMIUM = 'PREMIUM',
    MANAGER = 'MANAGER',
    ADMIN = 'ADMIN',
}

export interface I_User {
    id: string;
    name: string;
    email: string;
    avatarPath: string;
    rights: UserRole[];
    // favorites: IProduct[]
    // orders: IOrder[]
}

export interface I_UserSchema {
    authData?: I_User;
    _inited: boolean;
}
