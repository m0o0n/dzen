import React from "react"
import { deleteOrderThunk } from "../../store/Orders/OrdersActions"
import { useAppDispatch } from "../../store/redux"
import IconBars from "../common/icons/IconBars"
import IconTrash from "../common/icons/IconTrash"
import style from './order.module.scss'
type PropsType = {
    id: number
    title: string
}
const OrderCard: React.FC<PropsType> = ({ title, id }) => {
    const dispatch = useAppDispatch()
    return (
        <div className={style.order_card}>
            <div className={style.order_card__heading}>
                <h2>{title}</h2>
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

            <button className={style.order_card__remove} onClick={() => { dispatch(deleteOrderThunk({ data: { id } })) }}><IconTrash /></button>
        </div>
    )
}

export { OrderCard }