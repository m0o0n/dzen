import { useFieldArray } from "react-hook-form";
import React from "react";
import { IsDefaultCostSelect } from "./isDefaultCostSelect";
import { SymbolCostSelect } from "./symbolCostSelect";
import { ScrollList } from "../../../ScrollList";
import IconTrash from "../../../icons/IconTrash";


const CostFieldsArray: React.FC<any> = ({ control, register }) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: "price",
    });
    return (
        <div className="modal__create_product__cost">
            <h3>Введите стомость продута</h3>
            <ScrollList>
                {fields.map((field, i) => (
                    <div className="modal__create_product__cost_elm" key={i}>
                        <input
                            type="number"
                            {...register(`price.${i}.value`, { required: true })}
                        />
                        <IsDefaultCostSelect {...register(`price.${i}.isDefault`, { required: true, pattern: /\d{1,}/ })} />
                        <SymbolCostSelect {...register(`price.${i}.symbol`, { required: true })} />
                        <button onClick={() => remove(i)}><IconTrash /></button>
                    </div>
                ))}
            </ScrollList>

            <button
                className="modal__create_product__add_cost"
                disabled={fields.length >= 3}
                onClick={
                    (e: React.MouseEvent) => {
                        e.preventDefault()
                        append({ value: "", isDefault: "", symbol: "" })
                    }}
            >
                Add
            </button>
        </div>
    )
}

export { CostFieldsArray }