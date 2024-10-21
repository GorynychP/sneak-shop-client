import { I_Product, productService } from '../../../Product';
import { useQuery } from '@tanstack/react-query';
import { IPaginationResponse } from '../../services/product.service';

export const useProducts = () => {
    const { data, isLoading, isError } = useQuery<IPaginationResponse<I_Product>>({
        queryKey: ['products'],
        queryFn: () => productService.getAll(),
        gcTime: 1000 * 60 * 10,
        // refetchInterval: 5000,
        // retry: false,
    });
    const products = data?.items?.length ? data.items : null;

    return { products, isLoading, isError };
};
