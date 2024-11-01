import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { I_Product, ProductId } from '@/entities/Product';

type FavoritesSliceState = {
    productsIds: Record<ProductId, boolean>;
    favorites: I_Product[];
};

const initialState: FavoritesSliceState = { productsIds: {}, favorites: [] };

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        clearFavoritesData: (state) => {
            state.productsIds = {};
            state.favorites = [];
        },
        addProductsToFavorites: (state, action: PayloadAction<I_Product[]>) => {
            state.favorites = action.payload;
        },

        addProductToFavorites: (state, action: PayloadAction<I_Product>) => {
            const isProduct = state.favorites.some((product) => product.id === action.payload.id);
            if (isProduct) return;
            state.favorites.push(action.payload);
        },
        deleteProductToFavorites: (state, action: PayloadAction<I_Product>) => {
            state.favorites = state.favorites.filter((product) => product.id !== action.payload.id);
        },
        // removeProductFromWishlist: (state, action: PayloadAction<ProductId>) => {
        //     state.favorites = state.favorites.filter((product) => product.id !== action.payload);
        // },
        toggleFavoritesProduct: (state, action: PayloadAction<ProductId>) => {
            if (state.productsIds[action.payload]) {
                // state.productsIds[action.payload] = false;
                delete state.productsIds[action.payload];
            } else {
                state.productsIds[action.payload] = true;
            }
        },
    },
});

export const { actions: favoritesActions } = favoritesSlice;

export const selectIsInFavorites = createSelector(
    (state: RootState) => state.favorites.productsIds,
    (_: RootState, productId: ProductId) => productId,
    (productsIds: Record<ProductId, boolean>, productId: ProductId): boolean =>
        Boolean(productsIds[productId]),
);
