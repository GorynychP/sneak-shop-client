import { axiosWithAuth } from '@/shared/api/api.interceptors';
import { I_Favorites } from '../model/types/favorites';

class FavoritesService {
    private base = 'wishlist';

    async createAll(body?: { productIds?: string[] }) {
        const { data } = await axiosWithAuth.post<I_Favorites>(this.base, body);
        return data || [];
    }
    async getAll() {
        const { data } = await axiosWithAuth.get<I_Favorites>(this.base);
        return data || [];
    }
}

export const favoritesService = new FavoritesService();
