import { useAppDispatch } from '@/shared/model';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { addCommentActions } from '../slice/addCommentSlice';

export const useAddCommentAction = () => {
    const dispatch = useAppDispatch();

    return useMemo(() => bindActionCreators(addCommentActions, dispatch), [dispatch]);
};
