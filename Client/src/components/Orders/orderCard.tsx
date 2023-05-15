import React from "react"
import { orderProducts } from "../../models/order/queryTypes"
import { ProductPriceType } from "../../models/product/product"
import { deleteOrderThunk } from "../../store/Orders/OrdersActions"
import { useAppDispatch } from "../../store/redux"
import IconBars from "../common/icons/IconBars"
import IconTrash from "../common/icons/IconTrash"
import style from './order.module.scss'
type PropsType = {
    id: number
    title: string
    count_products: number
    date: string
    order_products: orderProducts[]
}
const OrderCard: React.FC<PropsType> = ({ title, id, count_products, date, order_products }) => {
    const dispatch = useAppDispatch()
    const cost = order_products.length
        ? order_products.map((el: orderProducts) => {
            const current = el.product.price.map(
                (e: ProductPriceType) =>
                    e.symbol.toLowerCase() === 'uah'
                        ? e.value
                        : 0
            )
            return current[0]
        }).reduce((a: number, c: number) => a + c)
        : 0

    console.log(cost)

    return (
        <div className={style.order_card}>
            <div className={style.order_card__heading}>
                <h2>{title}</h2>
            </div>

            <div className={style.order_card__info}>
                <IconBars />
                <div>
                    <span>{count_products}</span>
                    <p>Продукта</p>
                </div>
            </div>

            <div className={style.order_card__date}>
                <span>{date}</span>
            </div>

            <div className={style.order_card__price}>
                <span>{cost} UAH</span>
            </div>

            <button className={style.order_card__remove} onClick={() => { dispatch(deleteOrderThunk({ data: { id } })) }}><IconTrash /></button>
        </div>
    )
}

export { OrderCard }