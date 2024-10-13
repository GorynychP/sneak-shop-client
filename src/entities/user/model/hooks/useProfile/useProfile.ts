import { userService } from '../../../api/user.service';
import { useQuery } from '@tanstack/react-query';

export function useProfile() {
    const { data: user, isLoading } = useQuery({
        queryKey: ['profile'],
        queryFn: () => userService.getProfile(),
        gcTime: 1000 * 60 * 10,
        // refetchInterval: 5000,
        retry: false,
    });

    return { user, isLoading };
}
