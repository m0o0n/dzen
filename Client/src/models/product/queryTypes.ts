import { ProductGuaranteeType, ProductPriceType, ProductType } from "./product";

export interface ProductResponseType extends ProductType {
    createdAt: string
    updatedAt: string
    typeId: string
}

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