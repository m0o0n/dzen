import style from "./index.module.scss";
import React, { ReactNode } from "react"
type HeadingPropsType = {
    text: string,
    count: number
    callBack?: any
    children?: ReactNode | ReactNode[]
}
const Heading: React.FC<HeadingPropsType> = (props) => {
    return (
        <div className={style.heading}>
            <div className={style.heading__button} onClick={() => { props.callBack() }}>
                &#x271A;
            </div>
            <span>{props.text} / {props.count}</span>
            {props.children}
        </div>
    )
}

export { Heading }