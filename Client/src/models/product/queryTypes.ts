import { ProductGuaranteeType, ProductPriceType } from "./product";

export interface ProudctRequestType {
    title: string,
    specification: string
    typeId: number
    isNew: number
    guarantee: ProductGuaranteeType[]
    price: ProductPriceType[]
    photo: File
    serialNumber: number
}

export interface CreatedProductResponseType {
    id: number
    serialNumber: number
    title: string
    specification: string
    typeId: number
    isNew: number
    photo: string
    updatedAt: string
    createdAt: string
}