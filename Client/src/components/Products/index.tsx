import React, { useState } from 'react';
import { Heading } from '../common/Heading';
import { MainLayout } from '../common/Layout';
import { CreateProductModal } from '../common/Modal/Products/createProductModal/createProductModal';
import { ScrollList } from '../common/ScrollList';
import { ProductCard } from './productCard';
import style from './products.module.scss'

const Product: React.FC<any> = (proos) => {
    const [openForCreateProductModal, setOpenForCreateProductModal] = useState<boolean>(false)
    return (
        <MainLayout>
            <div className={style.products}>
                <Heading text='Продукты' callBack={() => { setOpenForCreateProductModal(true) }} count={25} >
                    <CreateProductModal open={openForCreateProductModal} setOpen={setOpenForCreateProductModal} />
                </Heading>

                <ScrollList>
                    <ProductCard
                        status={true}
                        garantee={true}
                        date={true}
                        cost={true}
                        drop={true}
                    />
                </ScrollList>
            </div>
        </MainLayout>
    )
}

export { Product }