import React from "react"
import { Modal } from ".."
import '../modal.scss'
import { useForm, SubmitHandler } from "react-hook-form";
import { ScrollList } from "../../ScrollList";
import { ProductCard } from '../../../Products/productCard'
import { useAppDispatch } from "../../../../store/redux";
import { createOrderThunk } from "../../../../store/Orders/OrdersActions";

type Inputs = {
    title: string,
    description: string,
    products: number[]
};
const AddOrderModal: React.FC<any> = (props) => {
    const dispatch = useAppDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data: any) => {
        dispatch(createOrderThunk(data))
    };
    return (
        <Modal
            backdrop_classes='modal__backdrop_size_content'
            card_classes='modal__card_size_large'
            open={props.open}
            onClose={() => { props.setOpen(false) }}
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
                            {[1, 2, 3].map((el, i) => {
                                return (
                                    <label key={i} className="product_label">
                                        <input
                                            type='checkbox'
                                            id={`input_${el}`}
                                            value={el}
                                            {...register("products", { required: 'Please select products' })}
                                        />
                                        <label htmlFor={`input_${el}`}></label>
                                        <ProductCard
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

                        <button className='modal__footer__cancel modal__orders__cancel' onClick={() => { props.setOpen(false) }}>ОТМЕНИТЬ</button>
                        {/* <button className='modal__footer__action modal__groups__action'>ОТПРАВИТЬ</button> */}
                        <input className='modal__footer__action modal__orders__action' type="submit" value="ОТПРАВИТЬ" />
                    </div>
                </form>
            </div>
        </Modal >
    )
}


export { AddOrderModal }