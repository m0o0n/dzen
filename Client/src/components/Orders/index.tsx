import React, { useState } from 'react'
import { MainLayout } from '../common/Layout'
import style from './order.module.scss'
import { OrderCard } from './orderCard'
import { ScrollList } from "../common/ScrollList";
import { Heading } from "../common/Heading";
import { AddOrderModal } from '../common/Modal/Orders/addOrderModal';
const Orders: React.FC = () => {
    const [openForAddOrder, setOpenForAddOrder] = useState(false)
    return (
        <MainLayout>
            <div className={style.orders}>
                <Heading text="Приходы" count={25} callBack={() => { setOpenForAddOrder(true) }} >
                    <AddOrderModal open={openForAddOrder} setOpen={setOpenForAddOrder} />
                </Heading>

                <ScrollList>
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                </ScrollList>
            </div>

        </MainLayout>
    )
}

export { Orders }