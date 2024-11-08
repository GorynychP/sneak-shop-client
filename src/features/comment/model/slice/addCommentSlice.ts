import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentSchema } from '../types/addComment';

const initialState: AddCommentSchema = {
    productId: '',
    text: '',
    rating: 0,
};

export const addCommentSlice = createSlice({
    name: 'addComment',
    initialState,
    reducers: {
        reset: (state) => {
            state.text = '';
            state.rating = 0;
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
