import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import toast from 'react-hot-toast';
import { productService } from '../../services/product.service';
import { I_ProductInput } from '../../model/types/product';
import { ADMIN_URL } from '@/shared/constants/router';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

export const useCreateProduct = () => {
    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const { mutate: createProduct, isPending: isLoadingCreate } = useMutation({
        mutationKey: ['create product'],
        mutationFn: (data: I_ProductInput) => productService.create(data),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['products'],
            });
            toast.success('Товар создан');
            navigate(ADMIN_URL.products());
        },
        onError(error: AxiosError<{ message: string }>) {
            const message = error?.response?.data?.message;
            toast.error(`Ошибка при создании товара: ${message} `);
        },
    });

    return useMemo(
        () => ({
            createProduct,
            isLoadingCreate,
        }),
        [createProduct, isLoadingCreate],
    );
};
