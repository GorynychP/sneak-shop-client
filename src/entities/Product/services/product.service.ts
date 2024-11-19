import { axiosClassic } from '@/shared/api/api.interceptors';
import { I_Product } from '../model/types/product';
import { I_FiltersProduct } from '@/features/sort';
import { I_PopularProduct } from '@/features/sort/model/types/filterProduct';

export interface IPaginationResponse<T> {
    items: T[];
    totalCount: number;
    isHasMore: boolean;
}

class ProductService {
    private base = 'products';

    async getAll(params?: I_FiltersProduct) {
        const paramsSizesToString: I_FiltersProduct = { ...params, sizes: JSON.stringify(params?.sizes) };
        const { data } = await axiosClassic.get<IPaginationResponse<I_Product>>(this.base, {
            params: paramsSizesToString,
        });
        return data || [];
    }
    async getPopular(params?: I_PopularProduct) {
        const { data } = await axiosClassic.get<I_Product[]>(`${this.base}/most-popular`, {
            params,
        });
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
