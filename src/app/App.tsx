import { MainLayout } from '@/shared/layouts/MainLayout';
import { AppRouter } from './providers/router';
import clsx from 'clsx';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { Footer } from '@/widgets/Footer';

function App() {
    const { theme } = useTheme();

    return (
        <div id="app" className={clsx('sneak-shop', [theme, 'container-small-layout'])}>
            <MainLayout header={<Navbar />} content={<AppRouter />} footer={<Footer />} />
        </div>
    );
}

export default App;
