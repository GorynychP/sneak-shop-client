import { MutationObserver } from '@tanstack/react-query';
import { favoritesService } from './favoritesApi';
import { favoritesActions } from '../model/slice/favoritesSlice';
import { AppThunk } from '@/app/providers/store/config/store';
import { queryClient } from '@/shared/api/query-client';
export const createFavoriteThunk = (): AppThunk => async (dispatch, getState) => {
    const favoritesIds = getState().favorites.productsIds;
    const productIds = Object.keys(favoritesIds);
    const mutationResult = await new MutationObserver(queryClient, {
        mutationFn: () => {
            return favoritesService.createAll({ productIds });
        },
    }).mutate();

    if (mutationResult?.wishlist.length > 0) {
        dispatch(favoritesActions.addProductsToFavorites(mutationResult?.wishlist || []));
    }
};
