import React from 'react'
import style from './groups.module.scss'
import IconBars from "../common/icons/IconBars"
import { NavLink } from 'react-router-dom'

const GroupOrder: React.FC<any> = (props) => {
    return (
        <NavLink to={`/groups/${props.id}`}>
            {({ isActive }) => (

                <div className={isActive ? `${style.active} ${style.group_order}` : style.group_order}>
                    <div className={style.group_order__info}>
                        <IconBars />
                        <div>
                            <span>22</span>
                            <p>Продукта</p>
                        </div>
                    </div>

                    <div className={style.group_order__date}>
                        <span>06 / Apr / 2017</span>
                    </div>
                </div>
            )}

        </NavLink>
    )
}


export { GroupOrder }