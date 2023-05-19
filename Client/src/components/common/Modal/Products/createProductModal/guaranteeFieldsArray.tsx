import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { Controller, useFieldArray } from "react-hook-form";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const GuaranteeFieldsArray = ({ control, errors, register }: any) => {
    const { fields } = useFieldArray({
        control,
        name: "guarantee",
    });
    return (
        <div>
            {fields.map((field, i) => {
                return (
                    <div className="modal__create_product__guarantee" key={i}>
                        <Controller
                            control={control}
                            name={`guarantee.${i}.start`}
                            rules={{ required: true }}
                            render={({ field: { onChange } }) => {
                                return (
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DateTimePicker']}>
                                            <DateTimePicker
                                                onChange={onChange}
                                                className="modal__create_product__muipicker"
                                                label="Выберете дату начала гарантии"
                                                views={["day", "month", "year"]}
                                                format="DD/MM/YYYY"

                                            />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                );
                            }}
                        />
                        <Controller
                            control={control}
                            name={`guarantee.${i}.end`}
                            rules={{ required: true }}
                            render={({ field: { onChange } }) => {
                                return (
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DateTimePicker']}>
                                            <DateTimePicker
                                                onChange={onChange}
                                                className="modal__create_product__muipicker"
                                                label="Выберете дату окончания гарантии"
                                                views={["day", "month", "year"]}
                                                format="DD/MM/YYYY"

                                            />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                );
                            }}
                        />
                        {errors.guarantee && <span>This fields is required</span>}
                    </div>
                )
            })}

        </div>
    )
}


export { GuaranteeFieldsArray }