import { useAppDispatch } from '@/shared/model';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { cartActions } from '../slice/cartSlice';

export const useCartActions = () => {
    const dispatch = useAppDispatch();

    return useMemo(() => bindActionCreators(cartActions, dispatch), [dispatch]);
};
