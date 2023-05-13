import React from 'react';
import { Heading } from '../common/Heading';
import { MainLayout } from '../common/Layout';
import { ScrollList } from '../common/ScrollList';
import { ProductCard } from './productCard';
import style from './products.module.scss'

const Product: React.FC<any> = (proos) => {
    return (
        <MainLayout>
            <div className={style.products}>
                <Heading text='Продукты' count={25} />

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