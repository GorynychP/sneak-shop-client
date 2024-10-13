import { memo } from 'react';
import clsx from 'clsx';
import { AppLink } from '@/shared/ui/AppLink';
import { getRouteCart, getRouteMain } from '@/shared/constants/router';

import AppSneakersImage from '@/shared/assets/icon/sneakers.svg';
import CartImage from '@/shared/assets/icon/cart.svg';
// import FavoriteImage from '@/shared/assets/icon/heart.svg';
import SearchImage from '@/shared/assets/icon/search.svg';
import { Input } from '@/shared/ui/Input';
import { ButtonFavorites } from '../../../Favorites/ButtonFavorites';
import { AuthModal } from '@/features/AuthUser';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { useAppSelector } from '@/shared/model';
import { selectUserAuthInited } from '@/entities/User';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const isAuth = useAppSelector(selectUserAuthInited);

    return (
        <header className={clsx('header', [className])}>
            <div className="header-left">
                <div className="header-left-block">
                    <AppLink to={getRouteMain()}>
                        <img src={AppSneakersImage} />
                    </AppLink>
                    <div className="header-left-block-links">
                        <AppLink to="./ForMen">Мужские</AppLink>
                        <AppLink to="./ForWomen">Женские</AppLink>
                    </div>
                </div>
            </div>
            <div className="header-right">
                <Input type="search" width="272px" height="48px" addonRight={<img src={SearchImage} />} />
                <div className="header-right-block">
                    <AppLink className="header-right-block-link" to={getRouteCart()}>
                        <img width={34} height={32} src={CartImage} />
                    </AppLink>
                    <ButtonFavorites />
                    {isAuth ? <AvatarDropdown /> : <AuthModal />}
                </div>
            </div>
        </header>
    );
});
