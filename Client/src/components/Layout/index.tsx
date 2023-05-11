import React, { ReactNode } from "react"
import { NavBar } from "./navBar"
import style from "./layout.module.scss"
import { Header } from "./header"

type PropsType = {
    children: ReactNode | ReactNode[]
}

const MainLayout: React.FC<PropsType> = (props) => {
    return (
        <>
            <Header />
            <div className={style.layout}>
                <NavBar />
                <main>{props.children}</main>
            </div>
        </>

    )
}

export { MainLayout }