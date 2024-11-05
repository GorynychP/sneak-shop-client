import { memo } from 'react';
import clsx from 'clsx';
import cls from './ProductSwiperBlocks.module.scss';
import { CardsSwiper } from './components/CardsSwiper/CardsSwiper';
import { I_Product } from '@/entities/Product';
import { getFilterProduct } from '../utils/getFilterProduct';

interface ProductSwiperBlocksProps {
    className?: string;
    products?: I_Product[];
    isLoading?: boolean;
    isError?: boolean;
}

export const ProductSwiperBlocks = memo(
    ({ className, products, isLoading, isError }: ProductSwiperBlocksProps) => {
        if (isLoading) return <div>Loading...</div>;
        if (isError) return <div>Error</div>;
        if (!products) return null;
        const { productsDiscount, productsForMen, productsForWomen } = getFilterProduct(products);
        return (
            <div className={clsx(cls.SneakersBlocks, [className])}>
                <CardsSwiper
                    products={productsDiscount}
                    title="SALE"
                    autoplay={{ delay: 4000, disableOnInteraction: true }}
                />
                <CardsSwiper
                    products={productsForMen}
                    title="FOR MEN"
                    autoplay={{ delay: 4000, disableOnInteraction: true, reverseDirection: true }}
                />
                <CardsSwiper
                    products={productsForWomen}
                    title="FOR WOMEN"
                    autoplay={{ delay: 4000, disableOnInteraction: true }}
                />
            </div>
        );
    },
);
