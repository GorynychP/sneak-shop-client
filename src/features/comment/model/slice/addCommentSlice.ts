import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentSchema } from '../types/addComment';

const initialState: AddCommentSchema = {
    productId: '',
    text: '',
    rating: null,
};

export const addCommentSlice = createSlice({
    name: 'addComment',
    initialState,
    reducers: {
        reset: (state) => {
            state.text = '';
            state.rating = null;
        },
        setTextComment: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
        setRatingComment: (state, action: PayloadAction<number>) => {
            state.rating = action.payload;
        },
        setProductId: (state, action: PayloadAction<string>) => {
            state.productId = action.payload;
        },
    },
});

export const { actions: addCommentActions } = addCommentSlice;
