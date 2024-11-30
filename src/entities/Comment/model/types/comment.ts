import { I_User } from '@/entities/User';

export interface I_Comment {
    id: string;
    text: string;
    rating?: number;
    createdAt: string;
    updatedAt?: string;
    user?: I_User;
    userId?: string;
    productId: string;
}

export interface I_AddComment {
    text: string;
    rating?: number;
}
