import { configureStore, combineReducers } from '@reduxjs/toolkit';
import ordersReducer from './Orders/OrdersReducer';
import productsReducer from './Products/productsReducer';


const reducers = combineReducers({
    Products: productsReducer,
    Orders: ordersReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: reducers,
    });
};
export type RootState = ReturnType<typeof reducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
