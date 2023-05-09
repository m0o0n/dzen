export interface ProductType {
    id: number,
    serialNumber: number,
    isNew: number,
    photo: string,
    title: string,
    type: string,
    specification: string,
    guarantee: ProductGuaranteeType
    price: Array<ProductPriceType>,
    order: number,
    date: string
}

export type ProductGuaranteeType = {
    start?: string
    end?: string
    productId?: number
    createdAt?: string
    updatedAt?: string
}

export type ProductPriceType = {
    value: number,
    symbol: string,
    isDefault: number
}