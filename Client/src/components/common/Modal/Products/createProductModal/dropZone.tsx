import { useDropzone } from "react-dropzone";
import React, { useEffect } from "react";
import { Controller } from "react-hook-form";



const ImagePreview: React.FC<any> = ({ file, setFile }) => {
    return (
        <div className="modal__create_product__preview">
            <img alt="prewiew" src={URL.createObjectURL(file)} />
            <button onClick={() => { setFile(null) }}>clear</button>
        </div>
    )
}

const DropZone: React.FC<any> = ({ setValue, file, setFile, control }) => {

    const { getRootProps, getInputProps, acceptedFiles, isDragActive } =
        useDropzone({
            onDrop: (files) => {
                setValue("photo", files);
            },
        });

    useEffect(() => {
        setFile(acceptedFiles[0]);
    });

    return (
        <Controller
            control={control}
            name='photo'
            rules={{ required: true }}
            render={({ field: { onChange } }) => {
                return (
                    <div className="modal__create_product__dropzone" {...getRootProps()}>
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
                        {file ? <ImagePreview file={file} setFile={setFile} /> : null}

                    </div>
                )

            }} />
    )
}

export { DropZone }