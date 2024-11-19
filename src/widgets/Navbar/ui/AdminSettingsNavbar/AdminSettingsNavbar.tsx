import { memo } from 'react';
import clsx from 'clsx';
import cls from './AdminSettingsNavbar.module.scss';
import { AvatarDropdown } from '@/features/AvatarDropdown';

interface AdminSettingsNavbarProps {
    className?: string;
}

export const AdminSettingsNavbar = memo(({ className }: AdminSettingsNavbarProps) => {
    return (
        <div className={clsx(cls.AdminSettingsNavbar, [className])}>
            <AvatarDropdown />
        </div>
    );
});
