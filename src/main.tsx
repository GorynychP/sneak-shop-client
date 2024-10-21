import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import './app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './app/providers/ThemeProvider/index.ts';
import { ScrollToTop } from './widgets/ScrollToTop/index.ts';
import { StoreProvider } from './app/providers/store';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <ScrollToTop />
                    <Toaster />
                    <App />
                    <ReactQueryDevtools initialIsOpen={false} />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
