import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './main/reducer';

const store = configureStore({
    reducer: {
        main: mainReducer,
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = any

export default store;
