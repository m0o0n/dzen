import React, { useState } from 'react';
import IconTrash from '../common/icons/IconTrash';
import { Modal } from '../common/Modal';
import { DeleteProductModal } from '../common/Modal/Products/deleteProductModal';
import style from './products.module.scss'

type ProductCardPropsType = {
    garantee: boolean | Array<string>
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
                <img alt='product' src='/images/me.jpg' />
            </div>
            <div className={style.product__name}>
                <span data-title="Gigabyte Technology X-58-USB3 Socket 1366 6 X-58-USB3">Gigabyte Technology X-58-USB3 Socket 1366 6 X-58-USB3</span>
                <p>S/N 123456789</p>
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
                        <span>c 06 / 04 / 2017</span>
                        <span>по 06 / 04 / 2020</span>
                    </div>
                )
            }

            {
                props.cost && (
                    <div className={style.product__cost}>
                        <span>100 USD</span>
                        <span>2500 UAH</span>
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