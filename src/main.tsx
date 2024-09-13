import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import './app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './app/providers/ThemeProvider/index.ts';
import { ScrollToTop } from './widgets/ScrollToTop/index.ts';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ThemeProvider>
            <ScrollToTop />
            <App />
        </ThemeProvider>
    </BrowserRouter>,
);
