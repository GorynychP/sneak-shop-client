import { useMutation } from '@tanstack/react-query';
import { authService } from '../../services/auth.service';
import { getRouteMain } from '@/shared/constants/router';
import { userActions } from '@/entities/User';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/shared/model';

export const useLogout = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { mutate: logout } = useMutation({
        mutationKey: ['logout'],
        mutationFn: () => authService.logout(),
        onSuccess: () => {
            dispatch(userActions.logout());
            navigate(getRouteMain());
        },
    });

    return logout;
};
