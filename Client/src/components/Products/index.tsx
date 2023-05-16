import React, { useEffect, useState } from 'react';
import { ProductType } from '../../models/product/product';
import { deleteProudctThunk, fetchAllProductsThunk } from '../../store/Products/productsActions';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import { Heading } from '../common/Heading';
import { MainLayout } from '../common/Layout';
import { CreateProductModal } from '../common/Modal/Products/createProductModal/createProductModal';
import { ScrollList } from '../common/ScrollList';
import { ProductCard } from './productCard';
import style from './products.module.scss'

const Product: React.FC<any> = (proos) => {
    const [openForCreateProductModal, setOpenForCreateProductModal] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const products = useAppSelector(state => state.Products.Products)
    const deleteProduct = (id: number) => {
        dispatch(deleteProudctThunk({ data: { id } }))
    }
    useEffect(() => {
        dispatch(fetchAllProductsThunk())
    }, [dispatch])
    return (
        <MainLayout>
            <div className={style.products}>
                <Heading text='Продукты' callBack={() => { setOpenForCreateProductModal(true) }} count={25} >
                    <CreateProductModal open={openForCreateProductModal} setOpen={setOpenForCreateProductModal} />
                </Heading>

                <ScrollList>
                    {
                        products.map((product: ProductType) => (
                            <ProductCard
                                key={product.id}
                                title={product.title}
                                serial_number={product.serialNumber}
                                price={product.price}
                                guarantee_start={product.guarantee.start}
                                guarantee_end={product.guarantee.end}
                                photo={product.photo}
                                status={true}
                                garantee={true}
                                date={product.createdAt}
                                cost={true}
                                drop={true}
                                deleteCallBack={() => { deleteProduct(product.id) }}
                            />
                        ))
                    }

                </ScrollList>
            </div>
        </MainLayout>
    )
}

export { Product }