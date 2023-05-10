import { OrderResponseType } from './../../models/order/queryTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllOrdersThunk } from './OrdersActions';
import { InitialStateType } from './OrdersTypes';


const initialState: InitialStateType = {
    Orders: [
        {
            id: 1,
            title: 'Order 1',
            createdAt: '2017-06-29 12:09:33',
            updatedAt: '2017-06-29 12:09:33',
            description: 'desc',
            order_products: [
                {
                    id: 1,
                    orderId: 1,
                    productId: 1,
                    createdAt: '2017-06-29 12:09:33',
                    updatedAt: '2017-06-29 12:09:33',
                    product: {
                        id: 1,
                        serialNumber: 1234,
                        isNew: 1,
                        photo: 'pathToFile.jpg',
                        title: 'Product 1',
                        typeId: 1,
                        specification: 'Specification 1',
                        guarantee: {
                            start: '2017-06-29 12:09:33',
                            end: '2017-06-29 12:09:33'
                        },
                        price: [
                            { value: 100, symbol: 'USD', isDefault: 0 },
                            { value: 2600, symbol: 'UAH', isDefault: 1 }
                        ],
                        createdAt: '2017-06-29 12:09:33',
                        updatedAt: '2017-06-29 12:09:33'
                    }
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
        [fetchAllOrdersThunk.pending.type]: state => {
            state.isLoading = true
        },
        [fetchAllOrdersThunk.fulfilled.type]: (
            state,
            action: PayloadAction<OrderResponseType[]>
        ) => {
            console.log(action, state, "order reducer")
            state.Orders = [...state.Orders, ...action.payload]
        }
    },
});

export default ordersReducer.reducer