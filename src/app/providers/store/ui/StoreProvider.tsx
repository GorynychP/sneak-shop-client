import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useMemo } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { appStore, persistedStore } from '../config/store';

export function StoreProvider({ children }: { children: ReactNode }) {
    const queryClient = useMemo(() => {
        return new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                },
            },
        });
    }, []);
    // const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <ReduxProvider store={appStore}>
                <PersistGate loading={null} persistor={persistedStore}>
                    {children}
                </PersistGate>
            </ReduxProvider>
        </QueryClientProvider>
    );
}
