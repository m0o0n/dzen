
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import React, { useState } from "react";
import { Modal } from "../..";
import { Select } from "./typesSelect";
import { GuaranteeFieldsArray } from "./guaranteeFieldsArray";
import { DropZone } from "./dropZone";
import { CostFieldsArray } from "./costFieldsArray";

type Inputs = {
    photo: any
    title: string
    specification: string
    serialNumber: number
    typeId: number | never
    guarantee: Array<{ start: Date | string, end: Date | string }>
    price: Array<{ value: number, isDefault: number, symbol: string }>
}



const CreateProductModal: React.FC<any> = (props) => {
    const { register, handleSubmit, setValue, formState: { errors }, control } = useForm<Inputs>({
        defaultValues: {
            guarantee: [{ start: '', end: '' }],
            price: [{ value: 0, isDefault: 0, symbol: '' }],
        },
    });
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    };
    const [file, setFile] = useState(null);
    return (
        <Modal
            backdrop_classes='modal__backdrop_size_content'
            card_classes='modal__card_size_large'
            open={props.open}
            onClose={() => { props.setOpen(false) }}
        >
            <div className="modal__create_product">

                <form onSubmit={handleSubmit(onSubmit)}>

                    <DropZone
                        setValue={setValue}
                        file={file}
                        setFile={setFile}
                        control={control}
                    />

                    <input
                        placeholder="Ведите заголовок для продукта"
                        type='text'
                        {...register("title", { required: true })}
                    />
                    {errors.title && <span>This field is required</span>}

                    <input
                        placeholder="Ведите спецификацию для продукта"
                        type='text'
                        {...register("specification", { required: true })}
                    />
                    {errors.specification && <span>This field is required</span>}

                    <input
                        placeholder="Ведите серийный номер продукта"
                        type='number'
                        {...register("serialNumber", { required: true })}
                    />
                    {errors.serialNumber && <span>This field is required</span>}

                    <Select label="Выберете тип" {...register("typeId", { required: true, pattern: /\d{1,}/ })} />
                    {errors.typeId && <span>This field is required</span>}

                    <GuaranteeFieldsArray errors={errors} register={register} control={control} />

                    <CostFieldsArray register={register} control={control} />

                    <div className='modal__footer modal__product__footer'>
                        <button className='modal__footer__cancel modal__create_product__cancel' onClick={() => { props.setOpen(false) }}>ОТМЕНИТЬ</button>
                        <input className='modal__footer__action modal__create_product__action' type="submit" value="ОТПРАВИТЬ" />
                    </div>
                </form>

            </div>
        </Modal >
    )
}

export { CreateProductModal }