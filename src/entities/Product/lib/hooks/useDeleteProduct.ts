import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import toast from 'react-hot-toast';
import { productService } from '../../services/product.service';
import { useNavigate, useParams } from 'react-router-dom';
import { ADMIN_URL } from '@/shared/constants/router';
import { AxiosError } from 'axios';

export const useDeleteProduct = () => {
    const params = useParams<{ id: string }>();

    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const { mutate: deleteProduct, isPending: isLoadingDelete } = useMutation({
        mutationKey: ['delete product'],
        mutationFn: (productId?: string) => productService.delete(productId || params.id || ''),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['products'],
            });
            toast.success('Товар удалён');
            navigate(ADMIN_URL.products());
        },

        onError(error: AxiosError<{ message: string }>) {
            const message = error?.response?.data?.message;
            toast.error(`Ошибка при удалении товара: ${message}`);
        },
    });

    return useMemo(() => ({ deleteProduct, isLoadingDelete }), [deleteProduct, isLoadingDelete]);
};
