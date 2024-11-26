import { axiosClassic, axiosWithAuth } from '@/shared/api/api.interceptors';
import { I_Product, I_ProductInput } from '../model/types/product';
import { I_FiltersProduct } from '@/features/sort';
import { I_PopularProduct } from '@/features/sort/model/types/filterProduct';

export interface IPaginationResponse<T> {
    items: T[];
    totalCount: number;
    isHasMore: boolean;
}

class ProductService {
    private base = 'products';

    async create(data: I_ProductInput) {
        const { data: createdProduct } = await axiosWithAuth<I_Product>({
            url: this.base,
            method: 'POST',
            data,
        });

        return createdProduct;
    }

    async update(id: string, data: I_ProductInput) {
        const { data: updatedProduct } = await axiosWithAuth<I_Product>({
            url: `${this.base}/${id}`,
            method: 'PUT',
            data,
        });

        return updatedProduct;
    }
    async delete(id: string) {
        await axiosWithAuth({
            url: `${this.base}/${id}`,
            method: 'DELETE',
        });
    }

    async getAll(params?: I_FiltersProduct) {
        const paramsSizesToString: I_FiltersProduct = { ...params, sizes: JSON.stringify(params?.sizes) };
        const { data } = await axiosClassic.get<IPaginationResponse<I_Product>>(this.base, {
            params: paramsSizesToString,
        });
        return data || [];
    }
    async getAllProducts(params?: I_FiltersProduct) {
        const paramsSizesToString: I_FiltersProduct = { ...params, sizes: JSON.stringify(params?.sizes) };
        const { data } = await axiosClassic.get<I_Product[]>(`${this.base}/all`, {
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
            url: `${this.base}/by-id/${id}`,
            method: 'GET',
        });

        return data;
    }
}

export const productService = new ProductService();
