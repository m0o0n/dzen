import { AxiosRequestConfig } from 'axios';
import { CreateOrderRequestType, UpdateOrderRequestType } from './../../models/order/queryTypes';
import { createAsyncThunk } from "@reduxjs/toolkit"
import { createOrder, deleteOrder, getAll, getOne, update } from "../../api/orders"

const fetchAllOrdersThunk = createAsyncThunk(
    'orders/getAll',
    (_, thunkAPI) => {
        try {
            const response = getAll()
            console.log("fetchAllOrdersThunk")
            return response
        } catch (e: any) {
            return thunkAPI.rejectWithValue(
                `Не вышло получить список ордеров, произошла ошибка: ${e.message}`,
            );
        }

    }
)

const fetchOneOrderThunk = createAsyncThunk(
    'orders/getOne',
    (id: number, thunkAPI) => {
        try {
            const response = getOne(id)
            return response
        } catch (e: any) {
            return thunkAPI.rejectWithValue(
                `Не вышло получить ордер, произошла ошибка: ${e.message}`,
            );
        }

    }
)

const createOrderThunk = createAsyncThunk(
    'orders/create',
    (formData: AxiosRequestConfig<CreateOrderRequestType>, thunkAPI) => {
        try {
            const response = createOrder(formData)
            return response
        } catch (e: any) {
            return thunkAPI.rejectWithValue(
                `Не вышло создать ордер, произошла ошибка: ${e.message}`,
            );
        }
    }
)

const updateOrderThunk = createAsyncThunk(
    'orders/update',
    (formData: AxiosRequestConfig<UpdateOrderRequestType>, thunkAPI) => {
        try {
            const response = update(formData)
            return response
        } catch (e: any) {
            return thunkAPI.rejectWithValue(
                `Не вышло обновить ордер, произошла ошибка: ${e.message}`,
            );
        }
    }
)

const deleteOrderThunk = createAsyncThunk(
    'orders/delete',
    (id: AxiosRequestConfig<{ id: number }>, thunkAPI) => {
        try {
            const response = deleteOrder(id)
            return response
        } catch (e: any) {
            return thunkAPI.rejectWithValue(
                `Не вышло удалить ордер, произошла ошибка: ${e.message}`,
            );
        }

    }
)

export { fetchAllOrdersThunk, fetchOneOrderThunk, createOrderThunk, updateOrderThunk, deleteOrderThunk }