import { I_CartProduct } from '@/entities/Cart/model/types/cart';
import { I_User } from '@/entities/User/model/types/user';

export enum EnumOrderStatus {
    PENDING = 'Pending',
    PAYED = 'Payed',
}

export interface I_Order {
    id: string;
    createdAt: string;
    items: I_CartProduct[];
    status: EnumOrderStatus;
    user: I_User;
    total: number;
}
