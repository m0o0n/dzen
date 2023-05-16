
import '../modal.scss'
import React, { useState } from 'react'
import { ProductCard } from '../../../Products/productCard'
import { Modal } from '..'
import { ScrollList } from '../../ScrollList'
import { useAppDispatch, useAppSelector } from '../../../../store/redux'
import { ProductType } from '../../../../models/product/product'
import { UpdateOrderRequestType } from '../../../../models/order/queryTypes'
import { fetchAllOrdersThunk, updateOrderThunk } from '../../../../store/Orders/OrdersActions'

const AddProductModal: React.FC<any> = (props) => {
    const products = useAppSelector(state => state.Products.Products)
    const current_order = useAppSelector(state => state.Orders.CurrentOrder)
    const [currentProduct, setCurrentProduct] = useState<null | number>(null)
    const dispatch = useAppDispatch()
    const addProductToOrder = async (data: UpdateOrderRequestType) => {
        await dispatch(updateOrderThunk({ data }))
        await dispatch(fetchAllOrdersThunk())
    }
    return (
        <Modal
            open={props.open}
            onClose={() => { props.setOpen(false) }}
            backdrop_classes='modal__backdrop_size_content'
            card_classes='modal__card_size_large'
        >
            <div className='modal__groups'>
                <h2>Выберете продукт из списка</h2>
                <ScrollList>
                    {products.map((product: ProductType) => (
                        <div
                            key={product.id}
                            className={
                                currentProduct === product.id
                                    ? 'modal__groups__current'
                                    : ''
                            }
                            onClick={() => { setCurrentProduct(product.id) }}
                        >
                            <ProductCard
                                title={product.title}
                                photo={product.photo}
                                price={product.price}
                                guarantee_start={product.guarantee.start}
                                guarantee_end={product.guarantee.end}
                                status={true}
                                garantee={true}
                                cost={true}
                                date={false}
                                drop={false}
                            />
                        </div>
                    ))}

                </ScrollList>

                <div className='modal__footer modal__groups__footer'>
                    <button className='modal__footer__cancel modal__groups__cancel' onClick={() => { props.setOpen(false) }}>ОТМЕНИТЬ</button>
                    <button onClick={() => { currentProduct && addProductToOrder({ id: current_order.id, product_id: currentProduct }) }} className='modal__footer__action modal__groups__action'>ОТПРАВИТЬ</button>
                </div>
            </div>
        </Modal>
    )

}


export { AddProductModal }