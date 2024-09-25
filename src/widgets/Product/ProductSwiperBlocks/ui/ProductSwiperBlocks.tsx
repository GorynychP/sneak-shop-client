import { memo } from 'react';
import clsx from 'clsx';
import cls from './ProductSwiperBlocks.module.scss';
import { CardsSwiper } from './components/CardsSwiper/CardsSwiper';
import { sneakersData } from '../../../../entities/Product/model/data/sneakersData';

interface ProductSwiperBlocksProps {
    className?: string;
}

export const ProductSwiperBlocks = memo(({ className }: ProductSwiperBlocksProps) => {
    return (
        <div className={clsx(cls.SneakersBlocks, [className])}>
            <CardsSwiper products={sneakersData} title="SALE" />
            <CardsSwiper products={sneakersData} title="FOR MEN" />
            <CardsSwiper products={sneakersData} title="FOR WOMEN" />
        </div>
    );
});
