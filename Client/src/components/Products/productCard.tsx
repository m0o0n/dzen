import React, { useState } from 'react';
import { ProductPriceType } from '../../models/product/product';
import IconTrash from '../common/icons/IconTrash';
import { DeleteProductModal } from '../common/Modal/Products/deleteProductModal';
import style from './products.module.scss'

type ProductCardPropsType = {
    id?: number
    isNew: number
    title: string
    price?: ProductPriceType[] | any
    serial_number: number
    garantee: boolean
    guarantee_start?: string | Date | any
    guarantee_end?: string | Date | any
    photo: string
    date: boolean | string | Date | any
    cost: boolean | Array<string>
    drop?: boolean
    status?: boolean | number
    deleteCallBack?: any
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
                <span>{props.title}</span>
                <p>S/N {props.serial_number}</p>
            </div>

            {
                props.status && (
                    <div className={style.product__status}>
                        <span>{props.isNew ? "Новый" : "Б/У"}</span>
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
                                <span key={price.id}>{price.value} {price.symbol}</span>
                            )
                        })}
                    </div>
                )
            }

            {
                props.date && (
                    <div className={style.product__date}>
                        <span>

                            {
                                new Date(props.date)
                                    .toLocaleString('ru',
                                        {
                                            day: 'numeric',
                                            month: 'numeric',
                                            year: 'numeric'
                                        }).split('.').join(' / ')
                            }

                        </span>
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

            <DeleteProductModal
                title={props.title}
                photo={props.photo}
                serial_number={props.serial_number}
                isNew={props.isNew}
                delete={props.deleteCallBack}
                open={open}
                setOpen={setOpen}
            />

        </div >
    )
}

export { ProductCard }