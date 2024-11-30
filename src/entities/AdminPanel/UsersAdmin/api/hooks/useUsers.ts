import { useQuery } from '@tanstack/react-query';
import { userAdminService } from '../../services/usersAdmin.service';

export const useUsers = (enabled?: boolean) => {
    const {
        data: users,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['get all users'],
        queryFn: () => userAdminService.getAllUsers(),
        gcTime: 1000 * 60 * 10,

        // retry: false,
        enabled,
    });

    return { users, isLoading, isError };
};
