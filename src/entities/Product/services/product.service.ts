import { axiosClassic } from '@/shared/api/api.interceptors';
import { I_Product } from '../model/types/product';
import { I_FiltersProduct } from '@/features/sort';

export interface IPaginationResponse<T> {
    items: T[];
    totalCount: number;
    isHasMore: boolean;
}

class ProductService {
    private base = 'products';
    // async getAll(params?: IPaginationParams) {
    //     const { data } = await axiosClassic<I_Product[]>({
    //         url: 'products',
    //         method: 'GET',
    //         params: params
    //             ? {
    //                   params,
    //               }
    //             : {},
    //     });
    //     console.log('data', data);
    //     return data || [];
    // }
    async getAll(params?: I_FiltersProduct) {
        const { data } = await axiosClassic.get<IPaginationResponse<I_Product>>(this.base, { params });
        return data || [];
    }
    async getById(id: string) {
        const { data } = await axiosClassic<I_Product>({
            url: `products/${id}`,
            method: 'GET',
        });

        return data || [];
    }
}

export const productService = new ProductService();
