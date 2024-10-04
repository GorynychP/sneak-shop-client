import { memo } from 'react';
import clsx from 'clsx';
import cls from './AvatarDropdown.module.scss';
import { Dropdown } from '@/shared/ui/Popups';
import AccountImage from '@/shared/assets/icon/account.svg';
import { getRouteMain, getRouteMyOrders, getRouteProfile } from '@/shared/const/router';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
    const onLogout = () => {};

    const items = [
        {
            content: 'Админка',
            key: 1,
            href: getRouteMain(),
        },
        {
            content: 'Профиль',
            key: 2,
            href: getRouteProfile(),
        },
        {
            content: 'Мои заказы',
            key: 3,
            href: getRouteMyOrders(),
        },

        { content: 'Выйти', key: 4, onClick: onLogout },
    ];
    return (
        <Dropdown
            direction="bottom left"
            onClick
            trigger={
                <div className="header-right-block-link">
                    <img width={26} height={28} src={AccountImage} alt="account" />
                </div>
            }
            items={items}
            className={clsx(cls.AvatarDropdown, [className])}
        />
    );
});
