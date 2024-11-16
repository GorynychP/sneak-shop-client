import { axiosWithAuth } from '@/shared/api/api.interceptors';

import { EnumOrderStatus, I_Order, IPaymentResponse } from '../model/types/order';

type TypeData = {
    status?: EnumOrderStatus;
    items: {
        quantity: number;
        price: number;
        productId: string;
        size: number;
    }[];
};

class OrderService {
    async getAllForUser() {
        const { data: order } = await axiosWithAuth<I_Order[]>({
            url: 'orders',
            method: 'GET',
        });
        return order;
    }

    async place(data: TypeData) {
        const { data: order } = await axiosWithAuth<IPaymentResponse>({
            url: 'orders/place',
            method: 'POST',
            data,
        });
        return order;
    }
}

export const orderService = new OrderService();
