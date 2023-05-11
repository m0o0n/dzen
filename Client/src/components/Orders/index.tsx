import React from 'react'
import { MainLayout } from '../common/Layout'
import style from './order.module.scss'
import { OrderCard } from './orderCard'
import { ScrollList } from "../common/ScrollList";
import { Heading } from "../common/Heading";
const Orders: React.FC = () => {
    return (
        <MainLayout>
            <div className={style.orders}>
                <Heading text="Приходы" count={25} />

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