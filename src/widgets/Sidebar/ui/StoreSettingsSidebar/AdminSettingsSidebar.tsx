import { memo } from 'react';
import clsx from 'clsx';
import cls from './AdminSettingsSidebar.module.scss';
import { AppLink } from '@/shared/ui/AppLink';
import { ADMIN_URL } from '@/shared/constants/router';
import { VStack } from '@/shared/ui/Stack';

interface AdminSettingsSidebarProps {
    className?: string;
}

export const AdminSettingsSidebar = memo(({ className }: AdminSettingsSidebarProps) => {
    // const navigation = useNavigation();
    return (
        <div className={clsx(cls.AdminSettingsSidebar, [className])}>
            {' '}
            AdminSettingsSidebar
            <AppLink to="/">На главную</AppLink>
            <VStack gap="16">
                <AppLink to={ADMIN_URL.root()}>Статистика</AppLink>
                <AppLink to={ADMIN_URL.products()}>Продукты</AppLink>
                <AppLink to={ADMIN_URL.reviews()}>Комментарии</AppLink>
            </VStack>
        </div>
    );
});
