import { OrderResponseType } from './../../models/order/queryTypes';

export type InitialStateType = {
    Orders: Array<OrderResponseType>,
    isLoading: boolean,
    error: string
} 