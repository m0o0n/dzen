import { OrderResponseType } from './../../models/order/queryTypes';

export type InitialStateType = {
    Orders: Array<OrderResponseType>
    CurrentOrder: OrderResponseType
    isLoading: boolean
    error: string
} 