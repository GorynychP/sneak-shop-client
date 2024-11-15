import { userActions, userService } from '@/entities/User';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useAppDispatch } from '@/shared/model';

export const useUser = () => {
    const dispatch = useAppDispatch();

    const { data: user, isLoading } = useQuery({
        queryKey: ['profile'],
        queryFn: () => userService.getUser(),
        gcTime: 1000 * 60 * 10,

        retry: false,
    });
    useEffect(() => {
        if (!user) return;
        dispatch(
            userActions.setAuthData({
                id: user?.id,
                email: user?.email,
                name: user?.name,
                rights: user?.rights,
                orders: user?.orders,
                avatarPath: user?.avatarPath,
            }),
        );
    }, [user, dispatch]);

    return { user, isLoading };
};
