import '../modal.scss'
import React from 'react'
import { ProductCard } from '../../../Products/productCard'
import { Modal } from '..'
import IconTrash from '../../icons/IconTrash'
type DeleteProductModalPropsType = {
    title: string,
    photo: string
    isNew: number
    serial_number: number
    open: boolean
    setOpen: (state: boolean) => void
    drop: () => void
}
const DeleteProductModal: React.FC<DeleteProductModalPropsType> = ({ title, photo, isNew, serial_number, open, setOpen, drop }) => {
    return (
        <Modal
            open={open}
            onClose={() => { setOpen(false) }}
            backdrop_classes='modal__backdrop_size_content'
            card_classes='modal__card_size_medium'
        >
            <div className='modal__product'>
                <h2>Вы уверены что хотите удалить этот продукт?</h2>

                <ProductCard
                    title={title}
                    photo={photo}
                    isNew={isNew}
                    price={[]}
                    guarantee_start=''
                    guarantee_end=''
                    serial_number={serial_number}
                    isStatus={true}
                    isGarantee={false}
                    isDrop={false}
                    isDate={false}
                    isCost={false}
                />

                <div className={'modal__footer modal__product__footer'}>
                    <button className='modal__footer__cancel modal__product__cancel' onClick={() => { setOpen(false) }}>ОТМЕНИТЬ</button>
                    <button onClick={() => { drop() }} className='modal__footer__action modal__product__action'><IconTrash /> УДАЛИТЬ</button>
                </div>
            </div>
        </Modal>
    )
}

export { DeleteProductModal }