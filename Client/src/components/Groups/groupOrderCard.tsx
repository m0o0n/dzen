import React from 'react'
import style from './groups.module.scss'
import IconBars from "../common/icons/IconBars"
import { NavLink } from 'react-router-dom'

type PropsType = {
    id: number,
    date: string,
    count_products: number
}
const GroupOrder: React.FC<PropsType> = ({ id, date, count_products }) => {
    return (
        <NavLink to={`/groups/${id}`}>
            {({ isActive }) => (

                <div className={isActive ? `${style.active} ${style.group_order}` : style.group_order}>
                    <div className={style.group_order__info}>
                        <IconBars />
                        <div>
                            <span>{count_products}</span>
                            <p>Продукта</p>
                        </div>
                    </div>

                    <div className={style.group_order__date}>
                        <span>{date}</span>
                    </div>
                </div>
            )}

        </NavLink>
    )
}


export { GroupOrder }