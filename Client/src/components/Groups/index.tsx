import React, { useEffect, useState } from 'react'
import { MainLayout } from '../common/Layout'
import style from './groups.module.scss'
import { ScrollList } from "../common/ScrollList";
import { Heading } from "../common/Heading";
import { GroupOrder } from "./groupOrderCard";
import { ProductCard } from '../Products/productCard';
import { AddProductModal } from '../common/Modal/Groups/addProductModal';
import { AddOrderModal } from '../common/Modal/Orders/addOrderModal';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import { fetchAllOrdersThunk, fetchOneOrderThunk, updateOrderThunk } from '../../store/Orders/OrdersActions';
import { NavLink, useParams } from 'react-router-dom';
import { orderProducts, OrderResponseType, UpdateOrderRequestType } from '../../models/order/queryTypes';

const Groups: React.FC = () => {
    const [openForAddProduct, setOpenForAddProduct] = useState<boolean>(false)
    const [openForAddOrder, setOpenForAddOrder] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const orders = useAppSelector(state => state.Orders.Orders)
    const current_order: OrderResponseType = useAppSelector(state => state.Orders.CurrentOrder)
    const params = useParams()

    const deleteProductFromOrder = async (data: UpdateOrderRequestType) => {
        await dispatch(updateOrderThunk({ data }))
        await dispatch(fetchAllOrdersThunk())
    }

    useEffect(() => {
        dispatch(fetchAllOrdersThunk())
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchOneOrderThunk(Number(params.id)))
    }, [dispatch, params.id])
    return (
        <MainLayout>
            <div className={style.groups}>
                <Heading text="Приходы" count={25} callBack={() => { setOpenForAddOrder(true) }}>
                    <AddOrderModal setOpen={setOpenForAddOrder} open={openForAddOrder} />
                </Heading>
                <div className={style.groups__container}>
                    <div className={style.groups__orders}>
                        <ScrollList>
                            {orders.map((order: OrderResponseType) => (
                                <GroupOrder
                                    key={order.id}
                                    id={order.id}
                                    count_products={order.order_products.length}
                                    date={
                                        new Date(order.createdAt)
                                            .toLocaleString('ru',
                                                {
                                                    day: 'numeric',
                                                    month: 'short',
                                                    year: 'numeric'
                                                })
                                    }
                                />
                            ))}
                        </ScrollList>
                    </div>
                    {
                        params.id && (
                            <div className={style.groups__content}>

                                <div className={style.groups__order_info}>
                                    <h1>{current_order.title}</h1>
                                    <div className={style.groups__order_info__add} onClick={() => { setOpenForAddProduct(true) }}>
                                        <button>&#x271A;</button>
                                        <span>Добавить продукт</span>
                                    </div>
                                    <NavLink to='/groups'><button className={style.groups__order_info__close}>&times;</button></NavLink>
                                </div>
                                <ScrollList>
                                    {current_order.order_products.map((order_product: orderProducts) => (
                                        <ProductCard
                                            key={order_product.id}
                                            serial_number={order_product.product.serialNumber}
                                            title={order_product.product.title}
                                            guarantee_start=''
                                            guarantee_end=''
                                            id={order_product.product.id}
                                            photo={order_product.product.photo}
                                            isNew={order_product.product.isNew}
                                            price={order_product.product.price}
                                            isStatus={true}
                                            isGarantee={false}
                                            isCost={false}
                                            isDate={false}
                                            isDrop={true}
                                            deleteCallBack={() => {
                                                deleteProductFromOrder({
                                                    order_product_id: order_product.id,
                                                    id: Number(params.id)
                                                })
                                            }}
                                        />
                                    ))}

                                </ScrollList>
                            </div>
                        )
                    }

                </div>
            </div>
            <AddProductModal setOpen={setOpenForAddProduct} open={openForAddProduct} />
        </MainLayout>
    )
}

export { Groups }