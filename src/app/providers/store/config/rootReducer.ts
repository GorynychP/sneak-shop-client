import { cartSlice } from '@/entities/Cart';
import { favoritesSlice } from '@/entities/Favorites';
import { userSlice } from '@/entities/User';
import { addCommentSlice } from '@/features/comment';
import { filtersSlice } from '@/features/sort';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
    [userSlice.name]: userSlice.reducer,
    [filtersSlice.name]: filtersSlice.reducer,
    [favoritesSlice.name]: favoritesSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [addCommentSlice.name]: addCommentSlice.reducer,
});
