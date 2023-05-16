import { ProductType } from './../models/product/product';
import { AxiosRequestConfig, AxiosResponse } from "axios"
import $HostInstace from "."
import { CreatedProductResponseType, ProudctRequestType } from "../models/product/queryTypes"


const getAll = async () => {
    try {
        const { data } = await $HostInstace.get<ProductType[]>('product')
        return data
    } catch (e: any) {
        throw new Error(e.message)
    }
}
const deleteProduct = async (id: AxiosRequestConfig<{ id: number }>) => {
    try {
        const response = await $HostInstace.delete<string>('/product', id)
        return response
    } catch (e: any) {
        throw new Error(e.message)
    }
}

const createProduct = async (formData: any) => {
    try {
        console.log(formData)
        const { data } = await $HostInstace.post<any>('/product', formData)
        return data
    } catch (e: any) {
        throw new Error(e.message)
    }
}


export { getAll, deleteProduct, createProduct }