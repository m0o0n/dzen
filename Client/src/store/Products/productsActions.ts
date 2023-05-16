import { AxiosRequestConfig } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createProduct, deleteProduct, getAll } from '../../api/products';
import { ProudctRequestType } from '../../models/product/queryTypes';
const fetchAllProductsThunk = createAsyncThunk(
    'products/getAll',
    (_, thunkAPI) => {
        try {
            const response = getAll()
            return response
        } catch (e: any) {
            return thunkAPI.rejectWithValue(
                `Не вышло получить список продуктов, произошла ошибка: ${e.message}`,
            );
        }
    }
)

const deleteProudctThunk = createAsyncThunk(
    'products/delete',
    (id: AxiosRequestConfig<{ id: number }>, thunkAPI) => {
        try {
            const response = deleteProduct(id)
            return response
        } catch (e: any) {
            return thunkAPI.rejectWithValue(
                `Не вышло удалить продукт, произошла ошибка: ${e.message}`,
            );
        }
    }
)

const createProductThunk = createAsyncThunk(
    'products/create',
    (formData: ProudctRequestType, thunkAPI) => {
        try {
            const {
                photo,
                price,
                guarantee,
                title,
                typeId,
                isNew,
                serialNumber,
                specification
            }: ProudctRequestType = formData
            const fd: any = new FormData()

            fd.append('price', JSON.stringify(price))
            fd.append('guarantee', JSON.stringify(guarantee))
            fd.append('title', title)
            fd.append('typeId', typeId)
            fd.append('isNew', isNew)
            fd.append('serialNumber', serialNumber)
            fd.append('specification', specification)
            fd.append('photo', photo[0])
            const response = createProduct(fd)
            return response
        } catch (e: any) {
            return thunkAPI.rejectWithValue(
                `Не вышло удалить продукт, произошла ошибка: ${e.message}`,
            );
        }
    }
)

export { fetchAllProductsThunk, deleteProudctThunk, createProductThunk }