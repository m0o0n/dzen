import React from "react";
import { UseFormRegister } from "react-hook-form";

interface IFormValues {
    symbol: number;
}
const SymbolCostSelect = React.forwardRef<
    HTMLSelectElement,
    { label: string } & ReturnType<UseFormRegister<IFormValues>>
>(({ onChange, onBlur, name, label }, ref) => (
    <div className="modal__create_product__select">
        <label>{label}</label>
        <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
            <option value={"uah"}>uah</option>
            <option value={"usd"}>usd</option>
            <option value={"eur"}>eur</option>
        </select>
    </div>
));

export { SymbolCostSelect }