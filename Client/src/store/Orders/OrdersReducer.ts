import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialStateType } from './OrdersTypes';

const initialState: InitialStateType = {
    Orders: [
        {
            id: 1,
            title: 'Order 1',
            date: '2017-06-29 12:09:33',
            description: 'desc',
            products: [
                {
                    id: 1,
                    serialNumber: 1234,
                    isNew: 1,
                    photo: 'pathToFile.jpg',
                    title: 'Product 1',
                    type: 'Monitors',
                    specification: 'Specification 1',
                    guarantee: {
                        start: '2017-06-29 12:09:33',
                        end: '2017-06-29 12:09:33'
                    },
                    price: [
                        { value: 100, symbol: 'USD', isDefault: 0 },
                        { value: 2600, symbol: 'UAH', isDefault: 1 }
                    ],
                    order: 1,
                    date: '2017-06-29 12:09:33'
                }
            ]
        },
    ],
    isLoading: false,
    error: ''
}

const ordersReducer = createSlice({
    name: 'orders',
    initialState,
    reducers: {

    },
    extraReducers: {

    },
});

export default ordersReducer.reducer