import React, { useEffect, useState } from 'react'
import { MainLayout } from '../common/Layout'
import style from './order.module.scss'
import { OrderCard } from './orderCard'
import { ScrollList } from "../common/ScrollList";
import { Heading } from "../common/Heading";
import { AddOrderModal } from '../common/Modal/Orders/addOrderModal';
import { fetchAllOrdersThunk } from '../../store/Orders/OrdersActions';
import { useAppDispatch, useAppSelector } from '../../store/redux';
const Orders: React.FC = () => {
    const [openForAddOrder, setOpenForAddOrder] = useState(false)
    const dispatch = useAppDispatch()
    const orders = useAppSelector(state => state.Orders.Orders)
    useEffect(() => {
        dispatch(fetchAllOrdersThunk())
    }, [dispatch])
    return (
        <MainLayout>
            <div className={style.orders}>
                <Heading text="Приходы" count={25} callBack={() => { setOpenForAddOrder(true) }} >
                    <AddOrderModal open={openForAddOrder} setOpen={setOpenForAddOrder} />
                </Heading>

                <ScrollList>
                    {orders.map(order => (
                        <OrderCard id={order.id} title={order.title} />
                    ))}
                </ScrollList>
            </div>

        </MainLayout>
    )
}

export { Orders }