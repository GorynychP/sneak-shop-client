import { useQuery } from '@tanstack/react-query';
import { productService } from '../../services/product.service';
import { I_Product } from '../../model/types/product';

export const useOneProduct = (params: { id: string }) => {
    const { data, isPending, isError } = useQuery<I_Product>({
        queryKey: ['product', params.id],
        queryFn: () => productService.getById(params.id),

        // retry: false,
    });

    return { product: data, isPending, isError };
};
