import { useDropzone } from "react-dropzone";
import React, { useEffect } from "react";
import { Controller } from "react-hook-form";



const DropZone: React.FC<any> = ({ setValue, register, file, setFile, control }) => {

    const { getRootProps, getInputProps, acceptedFiles, isDragActive } =
        useDropzone({
            onDrop: (files) => {
                setValue("photo", files);
            },
        });

    useEffect(() => {
        setFile(acceptedFiles[0]);
        console.log(acceptedFiles[0])
    });

    return (
        <Controller
            control={control}
            name='photo'
            rules={{ required: true }}
            render={({ field: { onChange } }) => {
                return (
                    <div {...getRootProps()}>
                        <input
                            type="file"
                            {...getInputProps({ onChange })}

                        />
                        {file ? null : isDragActive ? (
                            <div>

                                <p>Drop the files here ...</p>
                            </div>
                        ) : (
                            <div>

                                <p>Chose Main Photo</p>
                            </div>
                        )}
                        {file ? <img style={{ "height": "100px" }} alt="prewiew" src={URL.createObjectURL(file)} /> : null}
                        <div onClick={() => { setFile(null) }}>clear</div>

                    </div>
                )

            }} />
    )
}

export { DropZone }