import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { useQuery } from '@tanstack/react-query';
import { IPaginationResponse, productService } from '../../services/product.service';
import { I_Product } from '../../model/types/product';
import { useAppSelector } from '@/shared/model';
import {
    selectorFilters,
    selectorFiltersProducts,
    selectorGetFiltersPage,
    selectorGetFiltersSearch,
} from '@/features/sort';

export function useManageProductsQuery(quantity: number = 9) {
    const filterProducts = useAppSelector(selectorFiltersProducts);
    const filterUniq = useAppSelector(selectorFilters);
    const searchTerms = useAppSelector(selectorGetFiltersSearch);
    const page = useAppSelector(selectorGetFiltersPage);
    const debouncedSearch = useDebounce(searchTerms, 1000);

    const { data, isPending, isError } = useQuery<IPaginationResponse<I_Product>>({
        queryKey: ['products', { debouncedSearch, page, filter: filterUniq }],

        queryFn: () =>
            productService.getAll({
                searchTerm: debouncedSearch,
                skip: (page - 1) * quantity,
                take: quantity,
                ...filterProducts,
            }),
        // retry: false,
    });

    localStorage.setItem('totalCount', data?.totalCount.toString() || '0');
    const products = data?.items?.length ? data.items : undefined;
    return {
        products,
        isPending,
        isError,
        isHasMore: data?.isHasMore,
        totalCount: data?.totalCount,
    };
}
