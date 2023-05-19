import React, { ReactNode, useEffect, useState } from "react"
import { NavBar } from "./navBar"
import style from "./layout.module.scss"
import { Header } from "./header"
import { socket } from "../../.."



type PropsType = {
    children: ReactNode | ReactNode[]
}


const MainLayout: React.FC<PropsType> = (props) => {
    const [usersCount, setUsersCount] = useState<number>(0)
    // socket.on('userCount', (...response: any) => { console.log(response) })
    useEffect(() => {
        socket.on('userCount', (response: number) => {
            setUsersCount(response)
            console.log(response)
        })
        socket.emit('userCount', '', (response: any) => {
            setUsersCount(response)
            console.log(response)
        })
    }, [usersCount])
    return (
        <>
            <Header users={usersCount} />
            <div className={style.layout}>
                <NavBar />
                <main>
                    {props.children}
                </main>
            </div>
        </>

    )
}

export { MainLayout }