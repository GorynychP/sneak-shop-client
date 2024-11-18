import { memo } from 'react';
import clsx from 'clsx';
import cls from './AdminSettingsNavbar.module.scss';

interface AdminSettingsNavbarProps {
    className?: string;
}

export const AdminSettingsNavbar = memo(({ className }: AdminSettingsNavbarProps) => {
    return <div className={clsx(cls.AdminSettingsNavbar, [className])}> AdminSettingsNavbar</div>;
});
