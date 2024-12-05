import { memo } from 'react';
import clsx from 'clsx';
import cls from './Navigation.module.scss';
import { I_MenuItem } from '../../../types/menu';
import { ADMIN_URL } from '@/shared/constants/router';
import { ChartColumn, FolderKanban, Star, Users } from 'lucide-react';
import { MenuItem } from '../MenuItem/MenuItem';
import { VStack } from '@/shared/ui/Stack';
import { useAppSelector } from '@/shared/model';
import { selectIsUserAdmin } from '@/entities/User';

interface NavigationProps {
    className?: string;
}

export const Navigation = memo(({ className }: NavigationProps) => {
    const isAdmin = useAppSelector(selectIsUserAdmin);
    const routes: I_MenuItem[] = [
        {
            icon: ChartColumn,
            value: 'Статистика',
            link: ADMIN_URL.statistics(),
        },
        {
            icon: Users,
            value: 'Пользователи',
            link: isAdmin ? ADMIN_URL.users() : ADMIN_URL.forbidden(),
        },
        {
            icon: FolderKanban,
            value: 'Товары',
            link: ADMIN_URL.products(),
        },
        {
            icon: Star,
            value: 'Отзывы',
            link: ADMIN_URL.reviews(),
        },
    ];

    return (
        <div className={clsx(cls.Navigation, [className])}>
            <VStack gap="28">
                {routes.map((route) => (
                    <MenuItem key={route.link} route={route} />
                ))}
            </VStack>
        </div>
    );
});
