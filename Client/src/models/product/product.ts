export type ProductType = {
    id: number,
    serialNumber: number,
    isNew: number,
    photo: string,
    title: string,
    type: string,
    specification: string,
    guarantee: {
        start: string,
        end: string
    }
    price: Array<ProductPriceType>,
    order: number,
    date: string
}

export type ProductPriceType = {
    value: number,
    symbol: string, 
    isDefault: number
}