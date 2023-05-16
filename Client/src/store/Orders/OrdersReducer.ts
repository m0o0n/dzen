import { OrderResponseType } from './../../models/order/queryTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createOrderThunk, deleteOrderThunk, fetchAllOrdersThunk, fetchOneOrderThunk, updateOrderThunk } from './OrdersActions';
import { InitialStateType } from './OrdersTypes';


const initialState: InitialStateType = {
    Orders: [],
    CurrentOrder: {
        id: 0,
        title: '',
        description: '',
        createdAt: '',
        updatedAt: '',
        order_products: []
    },
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
            state.Orders = [...action.payload]
        },
        [fetchAllOrdersThunk.rejected.type]: (
            state,
            action: PayloadAction<any>
        ) => {
            state.isLoading = false
            state.error = action.payload
        },
        [fetchOneOrderThunk.pending.type]: state => {
            state.isLoading = true
        },
        [fetchOneOrderThunk.fulfilled.type]: (
            state,
            action: PayloadAction<OrderResponseType>
        ) => {
            state.isLoading = false
            state.CurrentOrder = action.payload
        },
        [fetchOneOrderThunk.rejected.type]: (
            state,
            action: PayloadAction<any>
        ) => {
            state.isLoading = false
            state.error = action.payload
        },
        [createOrderThunk.pending.type]: state => {
            state.isLoading = true
        },
        [createOrderThunk.fulfilled.type]: (
            state,
            action: PayloadAction<OrderResponseType>
        ) => {
            state.isLoading = false
            state.Orders = [...state.Orders, action.payload]
        },
        [createOrderThunk.rejected.type]: (
            state,
            action: any
        ) => {
            state.isLoading = false
            state.error = action.error.message
        },
        [deleteOrderThunk.pending.type]: state => {
            state.isLoading = true
        },
        [deleteOrderThunk.fulfilled.type]: (
            state,
            action: PayloadAction<any>
        ) => {
            state.isLoading = false
            state.Orders = state.Orders.filter(order => order.id !== action.payload.id)
        },
        [deleteOrderThunk.rejected.type]: (
            state,
            action: PayloadAction<any>
        ) => {
            state.isLoading = false
            state.error = action.payload
        },
        [updateOrderThunk.rejected.type]: state => {
            state.isLoading = true
        },
        [updateOrderThunk.fulfilled.type]: (
            state,
            action: PayloadAction<OrderResponseType>
        ) => {
            state.Orders = [...state.Orders.filter((order: OrderResponseType) => order.id !== action.payload.id), action.payload]
            state.CurrentOrder = action.payload
        },
        [updateOrderThunk.rejected.type]: (
            state,
            action: PayloadAction<any>
        ) => {
            state.isLoading = false
            state.error = action.payload
        }
    },
});

export default ordersReducer.reducer




// {
//     id: 1,
//     title: 'Order 1',
//     createdAt: '2017-06-29 12:09:33',
//     updatedAt: '2017-06-29 12:09:33',
//     description: 'desc',
//     order_products: [
//         {
//             id: 1,
//             orderId: 1,
//             productId: 1,
//             createdAt: '2017-06-29 12:09:33',
//             updatedAt: '2017-06-29 12:09:33',
//             product: {
//                 id: 1,
//                 serialNumber: 1234,
//                 isNew: 1,
//                 photo: 'pathToFile.jpg',
//                 title: 'Product 1',
//                 typeId: 1,
//                 specification: 'Specification 1',
//                 guarantee: {
//                     start: '2017-06-29 12:09:33',
//                     end: '2017-06-29 12:09:33'
//                 },
//                 price: [
//                     { value: 100, symbol: 'USD', isDefault: 0 },
//                     { value: 2600, symbol: 'UAH', isDefault: 1 }
//                 ],
//                 createdAt: '2017-06-29 12:09:33',
//                 updatedAt: '2017-06-29 12:09:33'
//             }
//         }

//     ]
// }