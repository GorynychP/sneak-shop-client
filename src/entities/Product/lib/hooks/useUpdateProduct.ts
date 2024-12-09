import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useMemo } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { productService } from '../../services/product.service';
import { I_ProductInput } from '../../model/types/product';
import { AxiosError } from 'axios';
export const useUpdateProduct = () => {
    const params = useParams<{ id: string }>();
    const queryClient = useQueryClient();

    const { mutate: updateProduct, isPending: isLoadingUpdate } = useMutation({
        mutationKey: ['update product'],
        mutationFn: async (data: I_ProductInput) => {
            return productService.update(params.id || '', data);
        },
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['products'],
            });
            toast.success('Товар обновлён');
        },

        onError(error: AxiosError<{ message: string }>) {
            const message = error?.response?.data?.message;
            toast.error(`Ошибка при обновлении товара: ${message}`);
        },
    });

    return useMemo(() => ({ updateProduct, isLoadingUpdate }), [updateProduct, isLoadingUpdate]);
};
