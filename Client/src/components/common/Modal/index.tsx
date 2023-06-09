import React, { ReactNode, useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'
import './modal.scss'


type ModalPropsType = {
    children: ReactNode | ReactNode[]
    open: boolean
    onClose: () => void
    backdrop_classes: string
    card_classes: string
}
const modalRootElament = document.querySelector('#modal')

const Modal: React.FC<ModalPropsType> = ({ children, open, onClose, backdrop_classes, card_classes }) => {

    const element = useMemo(() => {
        return document.createElement("div")
    }, [])

    const handlerCheckTarget = (e: React.MouseEvent<HTMLElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    useEffect(() => {
        modalRootElament?.appendChild(element)
        return () => {
            modalRootElament?.removeChild(element)
        }
    })
    if (open) {
        return createPortal(
            <div className={`modal__backdrop ${backdrop_classes}`} onClick={(e: React.MouseEvent<HTMLElement>) => handlerCheckTarget(e)} >
                <div className={`modal__card ${card_classes}`}>
                    {children}
                    <button className="modal__close" onClick={onClose}>&times;</button>
                </div>
            </div >,
            element)
    } else {
        return null
    }

}

export { Modal }