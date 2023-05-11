import style from "./index.module.scss";
import React from "react"
type HeadingPropsType = {
    text: string,
    count: number
    callBack?: () => void
}
const Heading: React.FC<HeadingPropsType> = (props) =>{
    return (
        <div className={style.heading}>
                    <div className={style.heading__button}>
                        &#x271A;
                    </div>
                    <span>{props.text} / {props.count}</span>
                </div>
    )
}

export {Heading}