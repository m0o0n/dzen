import { CreatedProductResponseType } from './../product/queryTypes';

export interface OrderResponseType {
    id: number
    description: string
    title: string
    createdAt: string
    updatedAt: string
    order_products: orderProducts[]
}

export interface UpdateOrderRequestType {
    id: number,
    order_product_id?: number
    product_id?: number
}

export interface CreateOrderRequestType {
    title: string
    description: string
    products: Array<number>
}

export interface orderProducts {
    id: number,
    productId: number
    orderId: number
    product: CreatedProductResponseType
    createdAt: string
    updatedAt: string
}