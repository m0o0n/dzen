import React from 'react'
import { MainLayout } from '../Layout'
import style from './order.module.scss'
import { OrderCard } from './orderCard'

const Orders: React.FC = () => {
    return (
        <MainLayout>
            <div className={style.orders}>
                <div className={style.orders__heading}>
                    <div className={style.orders__heading__button}>
                        &#x271A;
                    </div>
                    <span>Приході / 25</span>
                </div>
                <div className={style.orders__list}>
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
                </div>
            </div>
        </MainLayout>
    )
}

export { Orders }