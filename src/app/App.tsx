import { MainLayout } from '@/shared/layouts/MainLayout';
import { AppRouter } from './providers/router';
import clsx from 'clsx';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { AdminSettingsNavbar, Navbar } from '@/widgets/Navbar';
import { Footer } from '@/widgets/Footer';
import { StoreSettingsLayout } from '@/shared/layouts/StoreSettingsLayout';
import { useAppSelector } from '@/shared/model';
import { selectIsUserAdmin } from '@/entities/User';
import { useLocation } from 'react-router-dom';
import { AdminSettingsSidebar } from '@/widgets/Sidebar';

function App() {
    const location = useLocation();
    const isAdmin = useAppSelector(selectIsUserAdmin);
    const isLocationPathAdmin = location.pathname.includes('admin');
    const isAdminLayout = isAdmin && isLocationPathAdmin;

    const { theme } = useTheme();

    return (
        <div id="app" className={clsx('sneak-shop', [theme, 'container-small-layout'])}>
            {!isAdminLayout ? (
                <MainLayout header={<Navbar />} content={<AppRouter />} footer={<Footer />} />
            ) : (
                <StoreSettingsLayout
                    header={<AdminSettingsNavbar />}
                    sidebar={<AdminSettingsSidebar />}
                    content={<AppRouter />}
                    footer={<Footer />}
                />
            )}
        </div>
    );
}

export default App;
