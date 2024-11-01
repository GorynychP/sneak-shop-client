import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { appStore, persistedStore } from '../config/store';
import { queryClient } from '@/shared/api/query-client';

export function StoreProvider({ children }: { children: ReactNode }) {
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
