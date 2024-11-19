import { memo } from 'react';
import clsx from 'clsx';
import cls from './Logo.module.scss';
import LogoIcon2 from '@/shared/assets/icon/sneakers.svg';
import { AppLink } from '../../AppLink';
interface LogoProps {
    className?: string;
}

export const Logo = memo(({ className }: LogoProps) => {
    return (
        <AppLink to={'/'} className={clsx(cls.Logo, [className])}>
            <h2 className={cls.title}>SneakShop</h2>
            <img className={cls.icon} src={LogoIcon2} alt="logo" />
        </AppLink>
    );
});
