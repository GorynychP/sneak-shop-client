import { userSlice } from '@/entities/User/model/slice/userSlice';
import { filtersSlice } from '@/features/sort';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
    [userSlice.name]: userSlice.reducer,
    [filtersSlice.name]: filtersSlice.reducer,
});
