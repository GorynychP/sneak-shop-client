import { memo } from 'react';
import clsx from 'clsx';
import { AppLink } from '@/shared/ui/AppLink';
import { getRouteCart, getRouteMain } from '@/shared/const/router';

import AppSneakersImage from '@/shared/assets/icon/sneakers.svg';
import CartImage from '@/shared/assets/icon/cart.svg';
// import FavoriteImage from '@/shared/assets/icon/heart.svg';
import AccountImage from '@/shared/assets/icon/account.svg';
import SearchImage from '@/shared/assets/icon/search.svg';
import { Input } from '@/shared/ui/Input';
import { ButtonFavorites } from '../../../Favorites/ButtonFavorites';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
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
                <Input width="272px" height="48px" addonRight={<img src={SearchImage} />} />
                <div className="header-right-block">
                    <AppLink className="header-right-block-link" to={getRouteCart()}>
                        <img width={34} height={32} src={CartImage} />
                    </AppLink>
                    <ButtonFavorites />
                    {/* <AppLink className="header-right-block-link" to="./ForWomen">

                        <img width={32} height={28} src={FavoriteImage} />
                    </AppLink> */}
                    <AppLink className="header-right-block-link" to="./account">
                        <img width={26} height={28} src={AccountImage} alt="account" />
                    </AppLink>
                </div>
            </div>
        </header>
    );
});
