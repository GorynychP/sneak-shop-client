import { axiosWithAuth } from '@/shared/api/api.interceptors';

import { EnumOrderStatus, IPaymentResponse } from '../model/types/order';

type TypeData = {
    status?: EnumOrderStatus;
    items: {
        quantity: number;
        price: number;
        productId: string;
    }[];
};

class OrderService {
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
