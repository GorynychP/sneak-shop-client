import { memo } from 'react';
import clsx from 'clsx';
import cls from './MenuItem.module.scss';
import { I_MenuItem } from '@/widgets/Sidebar/types/menu';
import { AppLink } from '@/shared/ui/AppLink';

interface MenuItemProps {
    className?: string;
    route: I_MenuItem;
}

export const MenuItem = memo(({ className, route }: MenuItemProps) => {
    return (
        <AppLink to={route.link} activeClassName={cls.active} className={clsx(cls.MenuItem, [className])}>
            <route.icon />
            {route.value}
        </AppLink>
    );
});
