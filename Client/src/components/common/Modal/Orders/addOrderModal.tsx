import React, { useEffect } from "react"
import { Modal } from ".."
import '../modal.scss'
import { useForm, SubmitHandler } from "react-hook-form";
import { ScrollList } from "../../ScrollList";
import { ProductCard } from '../../../Products/productCard'
import { useAppDispatch, useAppSelector } from "../../../../store/redux";
import { createOrderThunk } from "../../../../store/Orders/OrdersActions";
import { ProductType } from "../../../../models/product/product";
import { fetchAllProductsThunk } from "../../../../store/Products/productsActions";
import { CreateOrderRequestType } from "../../../../models/order/queryTypes";

type Inputs = {
    title: string,
    description: string,
    products: number[]
};

type PropsType = {
    open: boolean
    setOpen: (state: boolean) => void
}
const AddOrderModal: React.FC<PropsType> = ({ open, setOpen }) => {
    const dispatch = useAppDispatch()
    const products: ProductType[] = useAppSelector(state => state.Products.Products)
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data: CreateOrderRequestType) => {
        const result = await dispatch(createOrderThunk(data))
        result.meta.requestStatus === 'fulfilled' && setOpen(false)
    };
    useEffect(() => {
        dispatch(fetchAllProductsThunk())
    }, [dispatch])
    return (
        <Modal
            backdrop_classes='modal__backdrop_size_content'
            card_classes='modal__card_size_large'
            open={open}
            onClose={() => { setOpen(false) }}
        >
            <div className="modal__orders">
                <h2>Создать Ордер</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Ведите имя для ордера" type='text'  {...register("title", { required: true })} />
                    {errors.title && <span>This field is required</span>}

                    <input placeholder="Ведите Описание для ордера" type='text' {...register("description", { required: true })} />
                    {errors.description && <span>This field is required</span>}
                    <div className="modal__orders__products">

                        <ScrollList>
                            {products.map((product: ProductType) => {
                                return (
                                    <label key={product.id} className="product_label">
                                        <input
                                            type='checkbox'
                                            id={`input_${product.id}`}
                                            value={product.id}
                                            {...register("products", { required: 'Please select products' })}
                                        />
                                        <label htmlFor={`input_${product.id}`}></label>
                                        <ProductCard
                                            title={product.title}
                                            price={product.price}
                                            photo={product.photo}
                                            serial_number={product.serialNumber}
                                            guarantee_start={product.guarantee.start}
                                            guarantee_end={product.guarantee.end}
                                            garantee={true}
                                            cost={true}
                                            date={false}
                                            drop={false}
                                        />
                                    </label>
                                )
                            })}

                        </ScrollList>

                    </div>



                    <div className='modal__footer modal__orders__footer'>

                        <button className='modal__footer__cancel modal__orders__cancel' onClick={() => { setOpen(false) }}>ОТМЕНИТЬ</button>
                        {/* <button className='modal__footer__action modal__groups__action'>ОТПРАВИТЬ</button> */}
                        <input className='modal__footer__action modal__orders__action' type="submit" value="ОТПРАВИТЬ" />
                    </div>
                </form>
            </div>
        </Modal >
    )
}


export { AddOrderModal }