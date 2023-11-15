import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cityReducer from './slices/citySlice';

const rootReducer = combineReducers({
    cities: cityReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type GetState = () => RootState;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
