import { I_User } from '@/entities/User';

export interface I_Comment {
    id: string;
    text: string;
    rating?: number;
    createdAt?: Date;
    updatedAt?: Date;
    user?: I_User;
}
