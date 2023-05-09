import { AxiosRequestConfig } from 'axios';
import { TypesType } from './../models/type/type';
import { AxiosResponse } from 'axios';
import $HostInstace from "."
const getAll = async () => {
    const { data } = await $HostInstace.get<AxiosResponse<TypesType>>('type')
    return data
}

const createType = async (name: AxiosRequestConfig<{ name: string }>) => {
    const { data } = await $HostInstace.post<AxiosResponse<TypesType>>('type', name)
    return data
}

export { getAll, createType }