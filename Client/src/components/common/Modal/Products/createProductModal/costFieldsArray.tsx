import { useFieldArray } from "react-hook-form";
import React from "react";

const CostFieldsArray: React.FC<any> = ({ control, register }) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: "price",
    });
    return (
        <>
            {fields.map((field, i) => (
                <div key={i}>
                    <input
                        type="number"
                        {...register(`price.${i}.value`, { required: true })}
                    />
                    <input
                        type="number"
                        max={1}
                        min={0}
                        {...register(`price.${i}.isDefault`, { required: true })}
                    />
                    <input {...register(`price.${i}.symbol`, { required: true })} />
                    <button onClick={() => remove(i)}>Remove</button>
                </div>
            ))}
            <button onClick={() => { append({ value: "", isDefault: "", symbol: "" }) }}>Add</button>
        </>
    )
}

export { CostFieldsArray }