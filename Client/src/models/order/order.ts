import { ProductType } from "../product/product"

export type OrderType = {
    id: number,
    title: string,
    date: string,
    description: string
    products: Array<ProductType>
}