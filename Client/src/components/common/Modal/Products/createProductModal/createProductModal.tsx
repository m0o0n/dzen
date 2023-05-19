
import { useForm, SubmitHandler } from "react-hook-form";
import React, { useState } from "react";
import { Modal } from "../..";
import { Select } from "./typesSelect";
import { GuaranteeFieldsArray } from "./guaranteeFieldsArray";
import { DropZone } from "./dropZone";
import { CostFieldsArray } from "./costFieldsArray";
import { useAppDispatch } from "../../../../../store/redux";
import { createProductThunk } from "../../../../../store/Products/productsActions";
import { ProudctRequestType } from "../../../../../models/product/queryTypes";
import { StatusSelect } from "./statusSelect";
import { ScrollList } from "../../../ScrollList";

type Inputs = {
    photo: File[]
    title: string
    specification: string
    serialNumber: string
    isNew: string
    typeId: string
    guarantee: Array<{ start: Date | string, end: Date | string }>
    price: Array<{ value: number, isDefault: number, symbol: string }>
}


type CreateProductModalPropsType = {
    open: boolean
    setOpen: (state: boolean) => void
}
const CreateProductModal: React.FC<CreateProductModalPropsType> = ({ open, setOpen }) => {
    const dispatch = useAppDispatch()
    const { register, handleSubmit, setValue, formState: { errors }, control } = useForm<Inputs>({
        defaultValues: {
            photo: [],
            guarantee: [{ start: '', end: '' }],
            price: [{ value: 0, isDefault: 0, symbol: '' }],
        },
    });
    const onSubmit: SubmitHandler<Inputs> = async (formData: ProudctRequestType) => {
        const result = await dispatch(createProductThunk(formData))
        result.meta.requestStatus === 'fulfilled' && setOpen(false)
    };
    const [file, setFile] = useState(null);
    return (
        <Modal
            backdrop_classes='modal__backdrop_size_content'
            card_classes='modal__card_size_large'
            open={open}
            onClose={() => { setOpen(false) }}
        >


            <form className="modal__create_product" onSubmit={handleSubmit(onSubmit)}>
                <div className="modal__create_product__inputsGroup">
                    <DropZone
                        setValue={setValue}
                        file={file}
                        setFile={setFile}
                        control={control}
                    />
                    <div className="column_flex">
                        <ScrollList>
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


                            <StatusSelect label="Выберете статус продукта:" {...register("isNew", { required: true, pattern: /\d{1,}/ })} />
                            {errors.isNew && <span>This field is required</span>}

                            <Select label="Выберете тип:" {...register("typeId", { required: true, pattern: /\d{1,}/ })} />
                            {errors.typeId && <span>This field is required</span>}

                            <GuaranteeFieldsArray errors={errors} register={register} control={control} />
                        </ScrollList>

                    </div>

                </div>

                <CostFieldsArray register={register} control={control} />

                <div className='modal__footer modal__product__footer'>
                    <button className='modal__footer__cancel modal__create_product__cancel' onClick={() => { setOpen(false) }}>ОТМЕНИТЬ</button>
                    <input className='modal__footer__action modal__create_product__action' type="submit" value="ОТПРАВИТЬ" />
                </div>
            </form>
        </Modal >
    )
}

export { CreateProductModal }