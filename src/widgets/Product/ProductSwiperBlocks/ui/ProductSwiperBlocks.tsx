import { memo } from 'react';
import clsx from 'clsx';
import cls from './ProductSwiperBlocks.module.scss';
import { CardsSwiper } from './components/CardsSwiper/CardsSwiper';
import { I_Product } from '@/entities/Product';

interface ProductSwiperBlocksProps {
    className?: string;
    products: I_Product[];
}

export const ProductSwiperBlocks = memo(({ className, products }: ProductSwiperBlocksProps) => {
    return (
        <div className={clsx(cls.SneakersBlocks, [className])}>
            <CardsSwiper products={products} title="SALE" />
            <CardsSwiper products={products} title="FOR MEN" />
            <CardsSwiper products={products} title="FOR WOMEN" />
        </div>
    );
});
