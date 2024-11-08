import { useQuery } from '@tanstack/react-query';
import { favoritesService } from './favoritesApi';
import { useAppSelector } from '@/shared/model';

import { I_Favorites } from '../model/types/favorites';
// import { useMemo } from 'react';

export function useFavorites() {
    const IsInitedUser = useAppSelector((state) => state.user._inited);
    // const favoritesIds = useAppSelector((state) => state.favorites.productsIds);
    const localFavorites = useAppSelector((state) => state.favorites.favorites);

    // const productIds = useMemo(() => Object.keys(favoritesIds), [favoritesIds]);

    const { data: favoritesData, isLoading } = useQuery<I_Favorites>({
        queryKey: ['favorites'],
        queryFn: () => {
            return favoritesService.getAll();
        },
        enabled: IsInitedUser,
    });
    const favorites = favoritesData?.wishlist || localFavorites || [];
    return { favorites, isPending: isLoading };
}
