import { MainLayout } from '@/shared/layouts/MainLayout';
import { AppRouter } from './providers/router';
import clsx from 'clsx';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Navbar } from '@/widgets/Navbar';

function App() {
    const { theme } = useTheme();

    return (
        <main id="app" className={clsx('sneak-shop', [theme, 'container-small-layout'])}>
            <MainLayout header={<Navbar />} content={<AppRouter />} footer={<>footer</>} />
        </main>
    );
}

export default App;
