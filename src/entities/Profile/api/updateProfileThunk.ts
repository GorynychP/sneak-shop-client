import { AppThunk } from '@/app/providers/store/config/store';
import { userService } from '@/entities/User';
import { queryClient } from '@/shared/api/query-client';
import { MutationObserver } from '@tanstack/react-query';
// import { profileActions } from '../model/slice/profileSlice';
// import { I_Profile } from '../model/types/profile';
import toast from 'react-hot-toast';

export const updateProfileThunk = (): AppThunk => async (_, getState) => {
    const profile = getState().profile.form;
    await new MutationObserver(queryClient, {
        mutationFn: () => {
            return userService.updateProfile(profile);
        },
        onSuccess: (/*data: I_Profile*/) => {
            queryClient.invalidateQueries({ queryKey: ['profile'] });
            // dispatch(
            //     profileActions.initialProfile({
            //         id: data.id,
            //         email: data.email,
            //         name: data.name,
            //         country: data.country,
            //         phone: data.phone,
            //         address: data.address,
            //         city: data.city,
            //     }),
            // );
            toast.success('Профиль успешно обновлен');
        },
    }).mutate();
};
