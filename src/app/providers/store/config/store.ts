import { configureStore, ThunkAction, UnknownAction } from '@reduxjs/toolkit';
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
import { logoutMiddleware } from '@/features/AuthUser/api/logoutMiddleware';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './rootReducer';
import { userSlice } from '@/entities/User';
import { filtersSlice } from '@/features/sort';
import { favoritesSlice } from '@/entities/Favorites';
import { cartSlice } from '@/entities/Cart';
// import { routeConfig } from '../../router/config/routerConfig';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [userSlice.name, filtersSlice.name, favoritesSlice.name, cartSlice.name],
};
export const extraArgument = {};
export function createStore() {
    const store = configureStore({
        reducer: persistReducer(persistConfig, rootReducer) as unknown as typeof rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: { extraArgument },
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }).concat(logoutMiddleware.middleware),
    });
    return store;
}

export const appStore = createStore();
export const persistedStore = persistStore(appStore);

export type RootState = ReturnType<typeof appStore.getState>;
export type AppThunk<R = void> = ThunkAction<R, RootState, typeof extraArgument, UnknownAction>;

export type AppDispatch = typeof appStore.dispatch;
