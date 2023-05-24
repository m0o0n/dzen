import React from "react"
import style from "./layout.module.scss"
import IconSettings from '../icons/IconSettings'
import { NavLink } from "react-router-dom"

type CustomLinkPropsType = {
    to: string
    style: any
    text: string
}
const CustomLink: React.FC<CustomLinkPropsType> = (props) => {
    return (
        <NavLink to={props.to}
            className={({ isActive }) =>
                isActive ? props.style : ""
            }
        >
            {props.text}
        </NavLink>
    )
}
const NavBar: React.FC = () => {
    return (
        <section className={style.navigation}>
            <div className={style.navigation__profile}>
                <img alt="Profile immage" src="/images/me.jpg" />
                <div className={style.navigation__profile_settings}>
                    <IconSettings />
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        <CustomLink
                            to="/orders"
                            style={style.active}
                            text="Приход"
                        />
                    </li>
                    <li>
                        <CustomLink
                            to="/groups"
                            style={style.active}
                            text="Группы"
                        />
                    </li>
                    <li>
                        <CustomLink
                            to="/products"
                            style={style.active}
                            text="Продукты"
                        />
                    </li>
                    <li>
                        <a>Пользователи</a>
                    </li>
                    <li>
                        <a>Настройки</a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}


export { NavBar }