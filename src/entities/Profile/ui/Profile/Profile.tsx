import { memo, useCallback } from 'react';
import clsx from 'clsx';
import cls from './Profile.module.scss';
import { ProfileCard } from '../ProfileCard/ProfileCard';
import { useProfile } from '../../api/hooks/useProfile';
import { PageLoader } from '@/widgets/PageLoader';
import { useProfileActions } from '../../model/hooks/useProfileActions';
import { useAppSelector } from '@/shared/model';

interface ProfileProps {
    className?: string;
}

export const Profile = memo(({ className }: ProfileProps) => {
    const { isLoading } = useProfile();
    const { updateProfile } = useProfileActions();
    const profileForm = useAppSelector((state) => state.profile.form);

    const onChangeFirstName = useCallback(
        (value?: string) => {
            updateProfile({ name: value });
        },
        [updateProfile],
    );
    const onChangePhone = useCallback(
        (value?: string) => {
            updateProfile({ phone: value });
        },
        [updateProfile],
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            updateProfile({ city: value });
        },
        [updateProfile],
    );
    const onChangeCountry = useCallback(
        (value?: string) => {
            updateProfile({ country: value });
        },
        [updateProfile],
    );

    const onChangeAddress = useCallback(
        (value?: string) => {
            updateProfile({ address: value });
        },
        [updateProfile],
    );

    if (isLoading) {
        return <PageLoader />;
    }

    return (
        <div className={clsx(cls.Profile, [className])}>
            <ProfileCard
                profile={profileForm}
                onChangeFirstName={onChangeFirstName}
                onChangePhone={onChangePhone}
                onChangeCountry={onChangeCountry}
                onChangeCity={onChangeCity}
                onChangeAddress={onChangeAddress}
            />
        </div>
    );
});
