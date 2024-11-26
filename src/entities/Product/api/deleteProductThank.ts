import { AppThunk } from '@/app/providers/store/config/store';
import { queryClient } from '@/shared/api/query-client';
import { MutationObserver } from '@tanstack/react-query';
import { productService } from '../services/product.service';
import toast from 'react-hot-toast';
import { ADMIN_URL } from '@/shared/constants/router';

export const deleteProductThank =
    (productId: string): AppThunk =>
    async () => {
        new MutationObserver(queryClient, {
            mutationFn: () => {
                return productService.delete(productId || '');
            },

            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ['products'],
                });
                toast.success('Товар удалён');
                window.location.href = ADMIN_URL.products();
            },
        }).mutate();
    };
