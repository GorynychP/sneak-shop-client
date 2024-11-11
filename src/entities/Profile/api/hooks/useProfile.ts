import { userService } from '@/entities/User';
import { useQuery } from '@tanstack/react-query';
import { useProfileActions } from '../../model/hooks/useProfileActions';
import { useEffect } from 'react';

export const useProfile = () => {
    const { initialProfile } = useProfileActions();
    const { data: profile, isLoading } = useQuery({
        queryKey: ['profile'],
        queryFn: () => userService.getProfile(),
        gcTime: 1000 * 60 * 10,

        retry: false,
    });
    useEffect(() => {
        if (!profile) return;
        initialProfile({
            id: profile?.id,
            email: profile?.email,
            name: profile?.name,
            phone: profile?.phone,
            country: profile?.country,
            city: profile?.city,
        });
    }, [initialProfile, profile]);

    return { profile, isLoading };
};
