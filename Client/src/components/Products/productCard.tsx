import React, { useState } from 'react';
import { ProductPriceType } from '../../models/product/product';
import IconTrash from '../common/icons/IconTrash';
import { DeleteProductModal } from '../common/Modal/Products/deleteProductModal';
import style from './products.module.scss'

type ProductCardPropsType = {
    id?: number
    isNew: number
    title: string
    price: ProductPriceType[] | []
    serial_number: number
    isGarantee: boolean
    guarantee_start: Date | string
    guarantee_end: Date | string
    photo: string
    date?: string | Date
    isDate: boolean
    isCost: boolean
    isDrop: boolean
    isStatus: boolean
    deleteCallBack?: any
}
const ProductCard: React.FC<ProductCardPropsType> = ({
    isNew,
    title,
    price,
    photo,
    date,
    serial_number,
    isGarantee,
    guarantee_start,
    guarantee_end,
    isCost,
    isDrop,
    isStatus,
    deleteCallBack
}) => {
    const [open, setOpen] = useState(false)
    return (
        <div className={style.product}>
            <span className={style.product__circle}></span>
            <div className={style.product__image}>
                <img alt='product' src={`http://localhost:5000/${photo}`} />
            </div>
            <div className={style.product__name}>
                <span>{title}</span>
                <p>S/N {serial_number}</p>
            </div>

            {
                isStatus && (
                    <div className={style.product__status}>
                        <span>{isNew ? "Новый" : "Б/У"}</span>
                    </div>
                )
            }


            {
                isGarantee && (
                    <div className={style.product__garantee}>

                        <span>c &nbsp;
                            {
                                new Date(guarantee_start)
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
                                new Date(guarantee_end)
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
                isCost && (
                    <div className={style.product__cost}>
                        {price.map((price: ProductPriceType) => {
                            return (
                                <span key={price.id}>{price.value} {price.symbol}</span>
                            )
                        })}
                    </div>
                )
            }

            {
                date && (
                    <div className={style.product__date}>
                        <span>

                            {
                                new Date(date)
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
                isDrop && (
                    <button onClick={() => { setOpen(true) }}>
                        <IconTrash />
                    </button>
                )
            }

            <DeleteProductModal
                title={title}
                photo={photo}
                serial_number={serial_number}
                isNew={isNew}
                drop={deleteCallBack}
                open={open}
                setOpen={setOpen}
            />

        </div >
    )
}

export { ProductCard }