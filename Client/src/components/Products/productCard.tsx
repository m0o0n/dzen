import React, { useState } from 'react';
import { ProductGuaranteeType, ProductPriceType } from '../../models/product/product';
import IconTrash from '../common/icons/IconTrash';
import { DeleteProductModal } from '../common/Modal/Products/deleteProductModal';
import style from './products.module.scss'

type ProductCardPropsType = {
    title?: string
    price?: ProductPriceType[] | any
    serial_number?: number
    garantee: boolean
    guarantee_start?: string | Date | any
    guarantee_end?: string | Date | any
    photo?: string
    date: boolean | string
    cost: boolean | Array<string>
    drop?: boolean
    status?: boolean | number
}
const ProductCard: React.FC<ProductCardPropsType> = (props) => {
    const [open, setOpen] = useState(false)
    return (
        <div className={style.product}>
            <span className={style.product__circle}></span>
            <div className={style.product__image}>
                <img alt='product' src={`http://localhost:5000/${props.photo}`} />
            </div>
            <div className={style.product__name}>
                <span data-title="Gigabyte Technology X-58-USB3 Socket 1366 6 X-58-USB3">{props.title}</span>
                <p>S/N {props.serial_number}</p>
            </div>

            {
                props.status && (
                    <div className={style.product__status}>
                        <span>Новый</span>
                    </div>
                )
            }


            {
                props.garantee && (
                    <div className={style.product__garantee}>

                        <span>c &nbsp;
                            {
                                new Date(props.guarantee_start)
                                    .toLocaleString('ru',
                                        {
                                            day: 'numeric',
                                            month: 'numeric',
                                            year: 'numeric'
                                        }).split('.').join(' / ')
                            }
                        </span>
                        <span>по &nbsp;
                            {
                                new Date(props.guarantee_end)
                                    .toLocaleString('ru',
                                        {
                                            day: 'numeric',
                                            month: 'numeric',
                                            year: 'numeric'
                                        }).split('.').join(' / ')
                            }</span>
                    </div>
                )
            }

            {
                props.cost && (
                    <div className={style.product__cost}>
                        {props.price.map((price: ProductPriceType) => {
                            return (
                                <span>{price.value} {price.symbol}</span>
                            )
                        })}
                    </div>
                )
            }

            {
                props.date && (
                    <div className={style.product__date}>
                        <span>по 06 / 04 / 2020</span>
                    </div>
                )
            }

            {
                props.drop && (
                    <button onClick={() => { setOpen(true) }}>
                        <IconTrash />
                    </button>
                )
            }

            <DeleteProductModal open={open} setOpen={setOpen} />

        </div >
    )
}

export { ProductCard }