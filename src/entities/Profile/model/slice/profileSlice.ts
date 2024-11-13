import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { I_Profile, I_ProfileSchema } from '../types/profile';

const initialState: I_ProfileSchema = {
    form: {
        id: '',
        email: '',
        address: '',
        city: '',
        country: '',
        name: '',
        phone: '',
    },
    profile: {},
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        resetEditProfile: (state) => {
            state.form = state.profile;
        },
        updateProfile: (state, action: PayloadAction<I_Profile>) => {
            state.form = { ...state.form, ...action.payload };
        },
        initialProfile: (state, action: PayloadAction<I_Profile>) => {
            state.profile = action.payload;
            state.form = action.payload;
        },
    },
});

export const { actions: profileActions } = profileSlice;

export const selectIsEditProfile = createSelector(
    (state: RootState) => state.profile.form,
    (state: RootState) => state.profile.profile,
    (form, profile) =>
        Boolean(
            form?.name === profile?.name &&
                form?.phone === profile?.phone &&
                form?.city === profile?.city &&
                form?.country === profile?.country &&
                form?.address === profile?.address,
        ),
);
