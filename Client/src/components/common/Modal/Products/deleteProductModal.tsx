import '../modal.scss'
import React from 'react'
import { ProductCard } from '../../../Products/productCard'
import { Modal } from '..'
import IconTrash from '../../icons/IconTrash'
type PropsType = {
    title: string,
    photo: string
    isNew: number
    serial_number: number
    open: boolean
    setOpen: (state: boolean) => void
    delete: () => void
}
const DeleteProductModal: React.FC<PropsType> = (props) => {
    return (
        <Modal
            open={props.open}
            onClose={() => { props.setOpen(false) }}
            backdrop_classes='modal__backdrop_size_content'
            card_classes='modal__card_size_medium'
        >
            <div className='modal__product'>
                <h2>Вы уверены что хотите удалить этот продукт?</h2>

                <ProductCard
                    title={props.title}
                    photo={props.photo}
                    isNew={props.isNew}
                    serial_number={props.serial_number}
                    status={true}
                    garantee={false}
                    drop={false}
                    date={false}
                    cost={false}
                />

                <div className={'modal__footer modal__product__footer'}>
                    <button className='modal__footer__cancel modal__product__cancel' onClick={() => { props.setOpen(false) }}>ОТМЕНИТЬ</button>
                    <button onClick={() => { props.delete() }} className='modal__footer__action modal__product__action'><IconTrash /> УДАЛИТЬ</button>
                </div>
            </div>
        </Modal>
    )
}

export { DeleteProductModal }