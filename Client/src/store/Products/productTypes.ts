import { ProductType } from "../../models/product/product"

export type InitialStateType = {
 Products: Array<ProductType>,
 isLoading: boolean,
 error: string
}