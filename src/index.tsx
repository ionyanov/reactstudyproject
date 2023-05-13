import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/app/App';
import '@/app/styles/index.scss';
import '@/shared/config/i18n/i18n';
import { ErrorBoundary } from '@/shared/lib/providers/ErrorBoundary';
import { StoreProvider } from '@/shared/lib/providers/StoreProvider';
import { ThemeProvider } from '@/shared/lib/providers/ThemeProvider';

const container = document.getElementById('root');

document.title = _IS_DEV_ ? 'DEV MODE' : 'PRUDUCT MODE';

const root = createRoot(container!);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
