import { useAppDispatch } from '@/shared/model';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { profileActions } from '../slice/profileSlice';

export const useProfileActions = () => {
    const dispatch = useAppDispatch();

    return useMemo(() => bindActionCreators(profileActions, dispatch), [dispatch]);
};
