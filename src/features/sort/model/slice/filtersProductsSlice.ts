import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { I_FiltersProduct } from '../types/filterProduct';

const initialState: I_FiltersProduct = {
    priceFrom: 1000,
    priceTo: 20000,
};

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilters: (state, action: PayloadAction<I_FiltersProduct>) => {
            return { ...state, ...action.payload };
        },

        resetFilters: () => {
            return initialState;
        },
        resetAndSetFilters: (state, action: PayloadAction<I_FiltersProduct>) => {
            return { ...initialState, ...action.payload };
        },
    },
    selectors: {
        getFiltersSearch: (state) => state.searchTerm || '',
    },
});
export const { actions: filterActions } = filtersSlice;

export const selectorFiltersProducts = (state: RootState) => state.filters;
export const selectorFilters = createSelector(selectorFiltersProducts, (filters) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { page, searchTerm, ...restFilters } = filters;
    return restFilters;
});
export const selectorGetFiltersSearch = (state: RootState) => state.filters.searchTerm || '';
export const selectorGetFiltersPage = (state: RootState) => state.filters.page || 1;
