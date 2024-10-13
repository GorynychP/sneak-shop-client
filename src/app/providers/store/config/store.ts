import { configureStore } from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './rootReducer';
import { userSlice } from '@/entities/User';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [userSlice.name],
};

export function createStore() {
    const store = configureStore({
        reducer: persistReducer(persistConfig, rootReducer) as unknown as typeof rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
    });
    return store;
}

export const appStore = createStore();
export const persistedStore = persistStore(appStore);

export type RootState = ReturnType<typeof appStore.getState>;

export type AppDispatch = typeof appStore.dispatch;
