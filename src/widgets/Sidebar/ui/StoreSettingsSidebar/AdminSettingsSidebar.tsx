import { memo } from 'react';
import clsx from 'clsx';
import cls from './AdminSettingsSidebar.module.scss';
import { Logo } from '@/shared/ui/Logo';
import { Navigation } from '../components/Navigation/Navigation';

interface AdminSettingsSidebarProps {
    className?: string;
}

export const AdminSettingsSidebar = memo(({ className }: AdminSettingsSidebarProps) => {
    return (
        <div className={clsx(cls.AdminSettingsSidebar, [className])}>
            <Logo />
            <Navigation />
        </div>
    );
});
