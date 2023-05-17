export interface ProductType {
    id: number,
    serialNumber: number,
    isNew: number,
    photo: string,
    title: string,
    typeId: number,
    specification: string,
    guarantee: ProductGuaranteeType
    price: Array<ProductPriceType>,
    createdAt?: string
    updatedAt?: string
}

export type ProductGuaranteeType = {
    start: Date | string
    end: Date | string
    productId?: number
    createdAt?: string
    updatedAt?: string
}

export type ProductPriceType = {
    id?: number
    value: number
    symbol: string
    isDefault: number
    productId?: number
    createdAt?: string
    updatedAt?: string
}