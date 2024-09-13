import { memo } from 'react';
import clsx from 'clsx';
import { AppLink } from '@/shared/ui/AppLink';
import { getRouteMain } from '@/shared/const/router';

// import AppSneakersImage3 from '@/shared/assets/icon/sneakers2.svg?react';
// import AppSneakersImage2 from '@/shared/assets/icon/sneakers-profil.svg?react';
// import AppSneakersImage1 from '@/shared/assets/icon/sneakers 1.svg?react';
import AppSneakersImage from '@/shared/assets/icon/sneakers.svg';
import CartImage from '@/shared/assets/icon/cart.svg';
import FavoriteImage from '@/shared/assets/icon/heart.svg';
import AccountImage from '@/shared/assets/icon/account.svg';
import SearchImage from '@/shared/assets/icon/search.svg';
import { Input } from '@/shared/ui/Input';
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
                        {/* <AppSneakersImage1 width={34} height={32} /> */}
                        {/* <AppSneakersImage2 width={34} height={32} /> */}
                        {/* <AppSneakersImage3 width={34} height={32} /> */}
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
                    <AppLink className="header-right-block-links" to="./ForMen">
                        <img width={34} height={32} src={CartImage} />
                    </AppLink>
                    <AppLink className="header-right-block-links" to="./ForWomen">
                        <img width={32} height={28} src={FavoriteImage} />
                    </AppLink>
                    <AppLink className="header-right-block-links" to="./account">
                        <img width={26} height={28} src={AccountImage} alt="account" />
                    </AppLink>
                </div>
            </div>
        </header>
    );
});
