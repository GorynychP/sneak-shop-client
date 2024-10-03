import { memo } from 'react';
import clsx from 'clsx';
import cls from './ProfileCard.module.scss';
import { Input } from '@/shared/ui/Input';
import { HStack } from '@/shared/ui/Stack';
import AccountImage from '@/shared/assets/icon/account.svg';
import { Button } from '@/shared/ui/Button';

export enum Country {
    'Russia' = 'Russia',
    'Ukraine' = 'Ukraine',
    'Belarus' = 'Belarus',
    'Kazakhstan' = 'Kazakhstan',
    'Turkey' = 'Turkey',
}
interface ProfileCardProps {
    className?: string;
    // data?: Profile;
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
    const { className, onChangeFirstName, onChangePhone, onChangeCountry } = props;

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
                value={''}
                placeholder="Name"
            />
            <Input
                onChangeSecondary={onChangePhone}
                type="tel"
                value={''}
                placeholder="+XX (999) 999-99-99"
                className={cls.input}
                label="Номер телефона:"
            />
            <Input
                onChangeSecondary={onChangeCountry}
                type="tel"
                value={''}
                placeholder="Turkey"
                className={cls.input}
                label="Страна:"
            />
            <Input
                onChangeSecondary={onChangeCountry}
                type="text"
                placeholder="с. Istanbul, str. Gentling, bg. 20, ap. 24"
                value={''}
                className={cls.input}
                label="Адрес:"
            />
        </div>
    );
});
