import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartSliceState, IAddToCartPayload, IChangeQuantityPayload } from '../types/cart';
import { generateShortId } from '@/shared/lib/utils/generator/generateShortId';
import toast from 'react-hot-toast';

const initialState: CartSliceState = { items: [] };

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.items = [];
        },
        addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
            const isExist = state.items.some((item) => item.product.id === action.payload.product.id);
            if (isExist) {
                const isSize = state.items.some(
                    (item) =>
                        item.size === action.payload.size && item.product.id === action.payload.product.id,
                );

                if (!isSize) {
                    state.items.unshift({ ...action.payload, id: generateShortId() });
                    toast.success('Товар добавлен в корзину');
                } else {
                    toast('Этот товар уже был ранее добавлен в корзину');
                }

                return;
            }
            state.items.unshift({ ...action.payload, id: generateShortId() });
            toast.success('Товар добавлен в корзину');
        },
        removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },
        addAndRemoveToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
            const isExist = state.items.some((item) => item.product.id === action.payload.product.id);
            if (isExist) {
                state.items = state.items.filter((item) => item.product.id !== action.payload.product.id);
            } else {
                state.items.push({ ...action.payload, id: generateShortId() });
            }
        },
        changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
            const { id, type } = action.payload;
            const item = state.items.find((item) => item.id === id);
            if (item) {
                if (type === 'plus') {
                    item.quantity++;
                } else {
                    if (item.quantity > 1) item.quantity--;
                }
            }
        },
        reset: (state) => {
            state.items = [];
        },
    },
});

export const { actions: cartActions } = cartSlice;
