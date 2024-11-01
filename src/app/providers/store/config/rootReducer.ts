import { favoritesSlice } from '@/entities/Favorites';
import { userSlice } from '@/entities/User';
import { filtersSlice } from '@/features/sort';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
    [userSlice.name]: userSlice.reducer,
    [filtersSlice.name]: filtersSlice.reducer,
    [favoritesSlice.name]: favoritesSlice.reducer,
});
