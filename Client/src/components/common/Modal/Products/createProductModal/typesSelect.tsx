import React from "react";

import { UseFormRegister } from "react-hook-form";
interface IFormValues {
    typeId: number | never;
}
const Select = React.forwardRef<
    HTMLSelectElement,
    { label: string } & ReturnType<UseFormRegister<IFormValues>>
>(({ onChange, onBlur, name, label }, ref) => (
    <div className="modal__create_product__select">
        <label>{label}</label>
        <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
            <option defaultValue="Please Select">Please Select</option>
            <option value={1}>Monitor</option>
        </select>
    </div>
));

export { Select }