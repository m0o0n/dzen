import { CreateOrderRequestType, UpdateOrderRequestType } from './../models/order/queryTypes';
import { AxiosResponse } from 'axios';
import { AxiosRequestConfig } from 'axios';
import $HostInstace from "."
import { OrderResponseType } from '../models/order/queryTypes';

const createOrder = async (formData: AxiosRequestConfig<CreateOrderRequestType>) => {
    try {
        const { data } = await $HostInstace.post<AxiosResponse<OrderResponseType>>('order', formData)
        return data
    } catch (e: any) {
        throw new Error(e.message)
    }
}

const getAll = async () => {
    try {
        const { data } = await $HostInstace.get<AxiosResponse<OrderResponseType[]>>('order')
        return data
    } catch (e: any) {
        throw new Error(e.message)
    }

}

const getOne = async (id: number) => {
    try {
        const { data } = await $HostInstace.get<AxiosResponse<OrderResponseType>>(`order/${id}`)
        return data
    } catch (e: any) {
        throw new Error(e.message)
    }

}

const update = async (formData: AxiosRequestConfig<UpdateOrderRequestType>) => {
    try {
        const { data } = await $HostInstace.put<AxiosResponse<OrderResponseType>>('order', formData.data)
        return data
    } catch (e: any) {
        throw new Error(e.message)
    }
}

const deleteOrder = async (id: AxiosRequestConfig<{ id: number }>) => {
    try {
        const { data } = await $HostInstace.delete<AxiosResponse<{ id: number }>>('order', id)
        return data
    } catch (e: any) {
        throw new Error(e.message)
    }

}

export { createOrder, getAll, getOne, update, deleteOrder }