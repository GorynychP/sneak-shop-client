import clsx from 'clsx';
import cls from './CardsSwiper.module.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { memo, useCallback } from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AppLink } from '@/shared/ui/AppLink';
import { getRouteForMen, getRouteForWomen, getRouteMain, getRouteSale } from '@/shared/const/router';
import { ProductCard } from '@/entities/Product';
import ArrowIcon from '@/shared/assets/icon/arrow.svg?react';
import { I_Product } from '@/entities/Product/model/types/sneakers';
import { ButtonFavorites } from '@/features/Product/ButtonFavorites';

type T_Tile = 'SALE' | 'FOR WOMEN' | 'FOR MEN';
interface CardsSwiperProps {
    className?: string;
    title: T_Tile;
    products: I_Product[];
}

export const CardsSwiper = memo(({ className, title, products }: CardsSwiperProps) => {
    const getLink = useCallback((title: T_Tile) => {
        switch (title) {
            case 'SALE':
                return getRouteSale();
            case 'FOR MEN':
                return getRouteForMen();
            case 'FOR WOMEN':
                return getRouteForWomen();
            default:
                return getRouteMain();
        }
    }, []);

    return (
        <div className={clsx(cls.CardsSwiper, [className])}>
            <div className={cls.blockNavigation}>
                <h3 className={cls.title}>{title}</h3>
                <AppLink className={cls.link} to={getLink(title)}>
                    Перейти в каталог
                    <ArrowIcon className={cls.arrowIcon} />
                </AppLink>
            </div>

            <div className={cls.cardList}>
                <Swiper
                    className={cls.Swiper}
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCard favoritesButton={<ButtonFavorites borderNone />} product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
});