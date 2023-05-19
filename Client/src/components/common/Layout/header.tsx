import React from 'react';
import style from "./layout.module.scss"
import IconGuard from '../icons/IconGuard';
import IconClock from '../icons/IconClock';
import Moment from 'react-moment';
import 'moment/locale/ru';
type HeaderPropsType = {
    users: number
}
const Header: React.FC<HeaderPropsType> = ({ users }) => {

    return (
        <header className={style.header}>
            <div className={style.header__container}>
                <div className={style.header__logo}>
                    <IconGuard />
                    <span>INVENTORY</span>
                </div>

                <div className={style.header__search}>
                    <input type="text" placeholder="Поиск" />
                </div>

                <div className={style.header__time}>
                    <div className={style.header__date}>
                        <span><Moment format="dddd" locale="ru" interval={1000} /></span>
                        <span>Active Pages: {users}</span>
                        <div className={style.header__clock}>
                            <span><Moment format="DD MMM, YYYY" locale="ru" interval={1000} /></span>
                            <IconClock />
                            <span><Moment format="HH:mm" interval={1000} /></span>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}

export { Header }