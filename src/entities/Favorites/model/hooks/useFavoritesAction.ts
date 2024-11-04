import { useAppDispatch } from '@/shared/model';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { favoritesActions } from '../slice/favoritesSlice';

export const useFavoritesAction = () => {
    const dispatch = useAppDispatch();

    return useMemo(() => bindActionCreators(favoritesActions, dispatch), [dispatch]);
};
