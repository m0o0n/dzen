import React from "react"
import IconBars from "../icons/IconBars"
import IconTrash from "../icons/IconTrash"
import style from './order.module.scss'
const OrderCard: React.FC = () => {
    return (
        <div className={style.order_card}>
            <div className={style.order_card__heading}>
                <h2>Long Londest Longier Name of Order</h2>
            </div>

            <div className={style.order_card__info}>
                <IconBars />
                <div>
                    <span>22</span>
                    <p>Продукта</p>
                </div>
            </div>

            <div className={style.order_card__date}>
                <span>06 / Apr / 2017</span>
            </div>

            <div className={style.order_card__price}>
                <span>50 UAH</span>
            </div>

            <button className={style.order_card__remove}><IconTrash /></button>
        </div>
    )
}

export { OrderCard }