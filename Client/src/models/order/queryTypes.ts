import { ProductType } from '../product/product';

export interface OrderResponseType {
    id: number
    description: string
    title: string
    createdAt: string
    updatedAt: string
    order_products: Array<orderProducts>
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
    product: ProductType
    createdAt: string
    updatedAt: string
}