import { favoritesService } from './favoritesApi';
import { useAppSelector } from '@/shared/model';
import { useMutation } from '@tanstack/react-query';
import { useMemo, useEffect } from 'react';
import { I_Favorites } from '../model/types/favorites';

export function useCreateFavorites() {
    const favoritesIds = useAppSelector((state) => state.favorites.productsIds);
    const localFavorites = useAppSelector((state) => state.favorites.favorites);
    const IsInitedUser = useAppSelector((state) => state.user._inited);
    const productIds = useMemo(() => Object.keys(favoritesIds), [favoritesIds]);

    const {
        data: favoritesData,
        mutate: syncFavorites,
        isPending,
    } = useMutation<I_Favorites>({
        mutationFn: async () => {
            // const { wishlist } = await favoritesService.getAll();
            return favoritesService.createAll({ productIds });
        },
        // onSuccess: () => {
        //     // queryClient.invalidateQueries({ queryKey: ['favorites'] });
        // },
    });

    useEffect(() => {
        if (!IsInitedUser) return;
        syncFavorites();
    }, [IsInitedUser, syncFavorites]);

    const favorites = favoritesData?.wishlist || localFavorites || [];
    return { favorites, isPending };
}
