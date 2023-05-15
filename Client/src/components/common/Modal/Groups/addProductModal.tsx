
import '../modal.scss'
import React, { useState } from 'react'
import { ProductCard } from '../../../Products/productCard'
import { Modal } from '..'
import { ScrollList } from '../../ScrollList'

const AddProductModal: React.FC<any> = (props) => {
    const [currentProduct, setCurrentProduct] = useState<null | number>(null)
    return (
        <Modal
            open={props.open}
            onClose={() => { props.setOpen(false) }}
            backdrop_classes='modal__backdrop_size_content'
            card_classes='modal__card_size_large'
        >
            <div className='modal__groups'>
                <h2>Выберете продукт из списка</h2>
                {/* <ScrollList>
                    <div
                        className={
                            currentProduct === 1
                                ? 'modal__groups__current'
                                : ''
                        }
                        onClick={() => { setCurrentProduct(1) }}
                    >
                        <ProductCard
                            status={true}
                            garantee={true}
                            cost={true}
                            date={false}
                            drop={false}
                        />
                    </div>

                    <div
                        className={
                            currentProduct === 2
                                ? 'modal__groups__current'
                                : ''
                        }
                        onClick={() => { setCurrentProduct(2) }}
                    >
                        <ProductCard
                            status={true}
                            garantee={true}
                            cost={true}
                            date={false}
                            drop={false}
                        />
                    </div>

                    <div
                        className={
                            currentProduct === 2
                                ? 'modal__groups__current'
                                : ''
                        }
                        onClick={() => { setCurrentProduct(2) }}
                    >
                        <ProductCard
                            status={true}
                            garantee={true}
                            cost={true}
                            date={false}
                            drop={false}
                        />
                    </div>

                    <div
                        className={
                            currentProduct === 2
                                ? 'modal__groups__current'
                                : ''
                        }
                        onClick={() => { setCurrentProduct(2) }}
                    >
                        <ProductCard
                            status={true}
                            garantee={true}
                            cost={true}
                            date={false}
                            drop={false}
                        />
                    </div>

                    <div
                        className={
                            currentProduct === 2
                                ? 'modal__groups__current'
                                : ''
                        }
                        onClick={() => { setCurrentProduct(2) }}
                    >
                        <ProductCard
                            status={true}
                            garantee={true}
                            cost={true}
                            date={false}
                            drop={false}
                        />
                    </div>

                    <div
                        className={
                            currentProduct === 2
                                ? 'modal__groups__current'
                                : ''
                        }
                        onClick={() => { setCurrentProduct(2) }}
                    >
                        <ProductCard
                            status={true}
                            garantee={true}
                            cost={true}
                            date={false}
                            drop={false}
                        />
                    </div>

                </ScrollList> */}

                <div className='modal__footer modal__groups__footer'>
                    <button className='modal__footer__cancel modal__groups__cancel' onClick={() => { props.setOpen(false) }}>ОТМЕНИТЬ</button>
                    <button className='modal__footer__action modal__groups__action'>ОТПРАВИТЬ</button>
                </div>
            </div>
        </Modal>
    )

}


export { AddProductModal }