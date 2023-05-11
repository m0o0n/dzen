import style from "./index.module.scss";
import React, { ReactNode } from "react"
type PropsType = {
    children: ReactNode | ReactNode[]
}
const ScrollList: React.FC<PropsType> = (props) => {
    return (
        <div className={style.scroll_list}>
            {props.children}
        </div>
    )
}


export {ScrollList}