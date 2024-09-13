import clsx from 'clsx';
import cls from './CardBlock.module.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { memo, useCallback } from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AppLink } from '@/shared/ui/AppLink';
import { getRouteForMen, getRouteForWomen, getRouteMain, getRouteSale } from '@/shared/const/router';
import { Card } from '@/shared/ui/Card';
import SneakerIcon from '@/shared/assets/Sneakers/For men/1.png';
import ArrowIcon from '@/shared/assets/icon/arrow.svg?react';

type T_Tile = 'SALE' | 'FOR WOMEN' | 'FOR MEN';
interface CardBlockProps {
    className?: string;
    title: T_Tile;
}

export const CardBlock = memo(({ className, title }: CardBlockProps) => {
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
        <div className={clsx(cls.CardBlock, [className])}>
            <div className={cls.blockNavigation}>
                <h3 className={cls.title}>{title}</h3>
                <AppLink className={cls.link} to={getLink(title)}>
                    Перейти в каталог
                    {/* <img style={{ color: 'red', fill: 'red' }} src={ArrowIcon} alt="arrow" /> */}
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
                    <SwiperSlide>
                        <Card
                            productSneaker={{
                                name: 'Кроссовки Nike Air Force 1 Gore-Tex',
                                icon: SneakerIcon,
                                price: 5000,
                                rating: 4.8,
                            }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            productSneaker={{
                                name: 'Кроссовки Nike Air Force 1 Gore-Tex',
                                icon: SneakerIcon,
                                price: 5000,
                                rating: 4.8,
                            }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            productSneaker={{
                                name: 'Кроссовки Nike Air Force 1 Gore-Tex',
                                icon: SneakerIcon,
                                price: 5000,
                                rating: 4.8,
                            }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            productSneaker={{
                                name: 'Кроссовки Nike Air Force 1 Gore-Tex',
                                icon: SneakerIcon,
                                price: 5000,
                                rating: 4.8,
                            }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            productSneaker={{
                                name: 'Кроссовки Nike Air Force 1 Gore-Tex',
                                icon: SneakerIcon,
                                price: 5000,
                                rating: 4.8,
                            }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            productSneaker={{
                                name: 'Кроссовки Nike Air Force 1 Gore-Tex',
                                icon: SneakerIcon,
                                price: 5000,
                                rating: 4.8,
                            }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            productSneaker={{
                                name: 'Кроссовки Nike Air Force 1 Gore-Tex',
                                icon: SneakerIcon,
                                price: 5000,
                                rating: 4.8,
                            }}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
});
