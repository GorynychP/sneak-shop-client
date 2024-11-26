// src/features/auth/middleware/logoutMiddleware.ts

import { createListenerMiddleware, TypedStartListening } from '@reduxjs/toolkit';
import { RootState, AppDispatch } from '@/app/providers/store/config/store';
import { apiAccessTokenIsBrokenEvent } from '@/shared/api/apiAccessTokenIsBrokenEvent';
import { logoutThunk } from './logoutThank';

// Создаем instance listenerMiddleware
export const logoutMiddleware = createListenerMiddleware();

// Настраиваем типы для startListening
export type TypedListening = TypedStartListening<RootState, AppDispatch>;

const logoutMiddlewareStartListening = logoutMiddleware.startListening as TypedListening;

// Слушаем событие apiAccessTokenIsBrokenEvent и вызываем logout
logoutMiddlewareStartListening({
    actionCreator: apiAccessTokenIsBrokenEvent,
    effect: async (_, listenerApi) => {
        try {
            listenerApi.dispatch(logoutThunk());
        } catch (error) {
            console.error('Ошибка при logout через middleware:', error);
        }
    },
});
