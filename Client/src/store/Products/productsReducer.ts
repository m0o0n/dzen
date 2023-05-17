import { ProductType } from './../../models/product/product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createProductThunk, deleteProudctThunk, fetchAllProductsThunk } from './productsActions';
import { InitialStateType } from './productTypes';
import { create } from 'domain';

const initialState: InitialStateType = {
    Products: [],
    isLoading: false,
    error: '',
};

const productsReducer = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchAllProductsThunk.pending.type]: state => {
            state.isLoading = true
        },
        [fetchAllProductsThunk.fulfilled.type]: (
            state,
            action: PayloadAction<ProductType[]>
        ) => {
            state.isLoading = false
            state.Products = [...action.payload]
        },
        [fetchAllProductsThunk.rejected.type]: (
            state,
            action: any
        ) => {
            state.isLoading = false
            state.error = action.error.message
        },
        [deleteProudctThunk.pending.type]: state => {
            state.isLoading = true
        },
        [deleteProudctThunk.fulfilled.type]: (
            state,
            action: PayloadAction<{ data: { message: string, id: number } }>
        ) => {
            state.Products = state.Products.filter((product: ProductType) => product.id !== action.payload.data.id)
            state.isLoading = false
        },
        [deleteProudctThunk.rejected.type]: (
            state,
            action: any
        ) => {
            state.isLoading = false
            state.error = action.error.message
        },
        [createProductThunk.pending.type]: state => {
            state.isLoading = true
        },
        [createProductThunk.fulfilled.type]: (
            state,
            action: PayloadAction<ProductType>
        ) => {
            state.Products = [...state.Products, action.payload]
            state.isLoading = false
        },
        [createProductThunk.rejected.type]: (
            state,
            action: any
        ) => {
            state.error = action.error.message
            state.isLoading = false
        }
    },
});

export default productsReducer.reducer




// {
//     id: 1,
//     serialNumber: 1234,
//     isNew: 1,
//     photo: 'pathToFile.jpg',
//     title: 'Product 1',
//     typeId: 1,
//     specification: 'Specification 1',
//     guarantee: {
//         start: '2017-06-29 12:09:33',
//         end: '2017-06-29 12:09:33'
//     },
//     price: [
//         { value: 100, symbol: 'USD', isDefault: 0 },
//         { value: 2600, symbol: 'UAH', isDefault: 1 }
//     ],
//     createdAt: '2017-06-29 12:09:33',
//     updatedAt: '2017-06-29 12:09:33'
// }