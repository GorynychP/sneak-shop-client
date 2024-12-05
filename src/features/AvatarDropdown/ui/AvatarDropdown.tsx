import { memo } from 'react';
import clsx from 'clsx';
import cls from './AvatarDropdown.module.scss';
import { Dropdown } from '@/shared/ui/Popups';
import AccountImage from '@/shared/assets/icon/account.svg';
import { ADMIN_URL, getRouteMyOrders, getRouteProfile } from '@/shared/constants/router';
import { useLogout } from '@/features/AuthUser';
import { useAppSelector } from '@/shared/model';
import { selectIsUserAdmin, selectIsUserManager } from '@/entities/User';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
    const isAdmin = useAppSelector(selectIsUserAdmin);
    const isManager = useAppSelector(selectIsUserManager);
    const isAccess = isAdmin || isManager;

    const onLogout = useLogout();

    const items = [
        ...(isAccess
            ? [
                  {
                      content: isAdmin ? 'Админка (Admin)' : 'Админка (Менеджер)',
                      key: 1,
                      href: ADMIN_URL.statistics(),
                  },
              ]
            : []),
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
            isClick
            trigger={
                <div className="hover-avatar-dropdown">
                    <img width={26} height={28} src={AccountImage} alt="account" />
                </div>
            }
            items={items}
            className={clsx(cls.AvatarDropdown, [className])}
        />
    );
});
