import { userSlice } from '@/entities/User/model/slice/userSlice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
    [userSlice.name]: userSlice.reducer,
});
