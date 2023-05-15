import React, { useState } from 'react'
import { MainLayout } from '../common/Layout'
import style from './groups.module.scss'
import { ScrollList } from "../common/ScrollList";
import { Heading } from "../common/Heading";
import { GroupOrder } from "./groupOrderCard";
import { ProductCard } from '../Products/productCard';
import { AddProductModal } from '../common/Modal/Groups/addProductModal';
import { AddOrderModal } from '../common/Modal/Orders/addOrderModal';

const Groups: React.FC = () => {
    const [openForAddProduct, setOpenForAddProduct] = useState<boolean>(false)
    const [openForAddOrder, setOpenForAddOrder] = useState<boolean>(false)
    return (
        <MainLayout>
            <div className={style.groups}>
                <Heading text="Приходы" count={25} callBack={() => { setOpenForAddOrder(true) }}>
                    <AddOrderModal setOpen={setOpenForAddOrder} open={openForAddOrder} />
                </Heading>
                <div className={style.groups__container}>
                    <div className={style.groups__orders}>
                        <ScrollList>
                            <GroupOrder id="1" />
                            <GroupOrder />
                            <GroupOrder />
                            <GroupOrder />
                            <GroupOrder />
                            <GroupOrder />
                            <GroupOrder />
                            <GroupOrder />
                            <GroupOrder />
                            <GroupOrder />
                            <GroupOrder />
                            <GroupOrder />
                        </ScrollList>
                    </div>

                    <div className={style.groups__content}>

                        <div className={style.groups__order_info}>
                            <h1>Long Long LOngest Name of Order</h1>
                            <div className={style.groups__order_info__add} onClick={() => { setOpenForAddProduct(true) }}>
                                <button>&#x271A;</button>
                                <span>Добавить продукт</span>
                            </div>
                            <button className={style.groups__order_info__close}>&times;</button>
                        </div>
                        <ScrollList>
                            <ProductCard
                                status={true}
                                garantee={false}
                                cost={false}
                                date={false}
                                drop={true}
                            />
                        </ScrollList>
                    </div>
                </div>
            </div>
            <AddProductModal setOpen={setOpenForAddProduct} open={openForAddProduct} />
        </MainLayout>
    )
}

export { Groups }