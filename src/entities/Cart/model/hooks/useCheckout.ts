import { useMutation } from '@tanstack/react-query';

import { useMemo } from 'react';
import toast from 'react-hot-toast';

import { useCart } from './useCart';

import { useCartActions } from './useCartActions';
import { orderService, IPaymentResponse } from '@/entities/Orders';

export const useCheckout = () => {
    const { cartItems } = useCart();

    const { reset } = useCartActions();

    const { mutate: createPayment, isPending: isLoadingCreate } = useMutation({
        mutationKey: ['create order and payment'],
        mutationFn: () =>
            orderService.place({
                items: cartItems.map((item) => ({
                    price: item.discount > 0 ? item.discountPrice : item.price,
                    quantity: item.quantity,
                    productId: item.product.id,
                })),
            }),
        onSuccess(data: IPaymentResponse) {
            window.location.href = data.confirmation.confirmation_url;
            reset();
        },
        onError() {
            toast.error('Ошибка при создании платежа');
        },
    });

    return useMemo(
        () => ({
            createPayment,
            isLoadingCreate,
        }),
        [createPayment, isLoadingCreate],
    );
};
