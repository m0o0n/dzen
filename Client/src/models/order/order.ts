import { ProductType } from "../product/product"

export interface OrderType {
    id: number,
    title: string,
    date: string,
    description: string
    products: Array<ProductType>
}

