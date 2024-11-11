import { memo } from 'react';
import clsx from 'clsx';
import cls from './ProfileCard.module.scss';
import { Input } from '@/shared/ui/Input';
import { HStack } from '@/shared/ui/Stack';
import AccountImage from '@/shared/assets/icon/account.svg';
import { Button } from '@/shared/ui/Button';
import { I_Profile } from '../../model/types/profile';
import { useProfileActions } from '../../model/hooks/useProfileActions';
import { updateProfileThunk } from '../../api/updateProfileThunk';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import { selectIsEditProfile } from '../../model/slice/profileSlice';

export enum Country {
    'Russia' = 'Russia',
    'Ukraine' = 'Ukraine',
    'Belarus' = 'Belarus',
    'Kazakhstan' = 'Kazakhstan',
    'Turkey' = 'Turkey',
}
interface ProfileCardProps {
    className?: string;
    profile?: I_Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    onChangeUsername?: (value?: string) => void;
    onChangeFirstName?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangePhone?: (value?: string) => void;
    onChangeCountry?: (value: string) => void;
    // onChangeCurrency?: (value: Currency) => void;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
    const { className, profile, onChangeFirstName, onChangePhone, onChangeCountry, onChangeCity } = props;
    const { resetEditProfile } = useProfileActions();
    const isEdit = useAppSelector(selectIsEditProfile);
    const dispatch = useAppDispatch();
    const onSaveProfile = () => {
        dispatch(updateProfileThunk());
    };
    const onCancelProfile = () => {
        resetEditProfile();
    };

    return (
        <div className={clsx(cls.ProfileCard, [className])}>
            <HStack gap="16" align="center">
                <img width={46} height={48} src={AccountImage} alt="account" />
                <h2>Профиль</h2>
            </HStack>
            <HStack gap="16">
                <Input disabled className={cls.input} label="E-mail:" value={'ivan@mail.ru'} />
                <Button theme="outline_cancel">Изменить</Button>
            </HStack>
            <HStack gap="16">
                <Input type="password" disabled className={cls.input} label="Password:" value={'123456789'} />
                <Button theme="outline_cancel">Изменить</Button>
            </HStack>
            <Input
                onChangeSecondary={onChangeFirstName}
                className={cls.input}
                label="Имя:"
                value={profile?.name}
                placeholder="Name"
            />
            <Input
                onChangeSecondary={onChangePhone}
                type="tel"
                value={profile?.phone === 'Не указан' ? '' : profile?.phone}
                placeholder="+XX (999) 999-99-99"
                className={cls.input}
                label="Номер телефона:"
            />
            <Input
                onChangeSecondary={onChangeCountry}
                type="tel"
                value={profile?.country === 'Не указана' ? '' : profile?.country}
                placeholder="Turkey"
                className={cls.input}
                label="Страна:"
            />
            <Input
                onChangeSecondary={onChangeCity}
                type="text"
                placeholder="с. Istanbul, str. Gentling, bg. 20, ap. 24"
                value={profile?.address}
                className={cls.input}
                label="Адрес:"
            />
            <HStack style={{ margin: '0  0  0 auto' }} gap="16">
                <Button disabled={isEdit} onClick={onCancelProfile} theme="outline_cancel">
                    Отменить
                </Button>
                <Button disabled={isEdit} onClick={onSaveProfile} theme="outline_save">
                    Сохранить
                </Button>
            </HStack>
        </div>
    );
});
