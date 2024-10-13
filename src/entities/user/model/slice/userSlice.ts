import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { I_User, I_UserSchema, UserRole } from '../types/user';

const initialState: I_UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<I_User>) => {
            state.authData = action.payload;
            state._inited = true;
        },

        logout: (state) => {
            state.authData = undefined;
            state._inited = false;
        },
    },
});

export const { actions: userActions } = userSlice;

export const selectUserAuthInited = (state: RootState) => state?.user._inited;

export const selectUserData = (state: RootState) => state?.user.authData;

export const getUserRoles = (state: RootState) => state.user.authData?.rights;

export const selectIsUserAdmin = createSelector(getUserRoles, (roles) =>
    Boolean(roles?.includes(UserRole.ADMIN)),
);
export const selectIsUserManager = createSelector(getUserRoles, (roles) =>
    Boolean(roles?.includes(UserRole.MANAGER)),
);
