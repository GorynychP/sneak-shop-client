import { AppThunk } from '@/app/providers/store/config/store';
import { queryClient } from '@/shared/api/query-client';
import { MutationObserver } from '@tanstack/react-query';
import { authService } from '../services/auth.service';
import { userActions } from '@/entities/User';

export const logoutThunk = (): AppThunk => async (dispatch) => {
    new MutationObserver(queryClient, {
        mutationFn: () => {
            return authService.logout();
        },
        onSuccess: () => {
            queryClient.clear();
            dispatch(userActions.logout());
            window.location.href = '/';
        },
    }).mutate();
};
