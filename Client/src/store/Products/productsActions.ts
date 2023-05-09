import { AxiosRequestConfig } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteOrder } from '../../api/orders';
import { getAll } from '../../api/products';
const getAllProductsThunk = createAsyncThunk(
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
            const response = deleteOrder(id)
            return response
        } catch (e: any) {
            return thunkAPI.rejectWithValue(
                `Не вышло удалить продукт, произошла ошибка: ${e.message}`,
            );
        }
    }
)

export { getAllProductsThunk, deleteProudctThunk }