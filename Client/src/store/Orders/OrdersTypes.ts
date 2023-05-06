import { OrderType } from "../../models/order/order"

export type InitialStateType = {
    Orders: Array<OrderType>,
    isLoading: boolean,
    error: string
} 