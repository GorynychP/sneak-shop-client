import { useMutation, useQueryClient } from '@tanstack/react-query';
import { authService } from '../../services/auth.service';
import { getRouteMain } from '@/shared/constants/router';
import { userActions } from '@/entities/User';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/shared/model';
// import { favoritesActions } from '@/entities/Favorites';

export const useLogout = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const queryClient = useQueryClient();

    const { mutate: logout } = useMutation({
        mutationKey: ['logout'],
        mutationFn: () => authService.logout(),
        onSuccess: () => {
            dispatch(userActions.logout());
            queryClient.clear();
            // dispatch(favoritesActions.clearFavoritesData());
            navigate(getRouteMain());
        },
    });

    return logout;
};
