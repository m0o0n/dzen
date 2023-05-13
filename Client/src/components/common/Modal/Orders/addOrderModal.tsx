import React from "react"
import { Modal } from ".."
import '../modal.scss'
import { useForm, SubmitHandler } from "react-hook-form";
import { ScrollList } from "../../ScrollList";
import { ProductCard } from '../../../Products/productCard'
type Inputs = {
    title: string,
    description: string,
    products: number[]
};
const AddOrderModal: React.FC<any> = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    return (
        <Modal
            backdrop_classes='modal__backdrop_size_content'
            card_classes='modal__card_size_large'
            open={props.open}
            onClose={() => { props.setOpen(false) }}
        >
            <div className="modal__orders">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("title", { required: true })} />
                    {errors.title && <span>This field is required</span>}

                    <input {...register("description", { required: true })} />
                    {errors.description && <span>This field is required</span>}

                    <ScrollList>
                        <label>
                            <input
                                type='checkbox'
                                {...register("products", { required: 'Please select products' })}
                            />
                            <ProductCard
                                garantee={true}
                                cost={true}
                                date={false}
                                drop={false}
                            />
                        </label>
                    </ScrollList>
                    <input type="submit" />
                </form>
            </div>
        </Modal >
    )
}


export { AddOrderModal }