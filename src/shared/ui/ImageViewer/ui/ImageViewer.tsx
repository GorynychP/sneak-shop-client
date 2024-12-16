import { memo, useState } from 'react';
import { getImageUrl } from '@/shared/lib/utils/format/getImageUrl';
import { Modal } from '../../Modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Keyboard } from 'swiper/modules';
import clsx from 'clsx';
import cls from './ImageViewer.module.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Swiper as I_Swiper } from 'swiper/types';
interface ImageViewerProps {
    className?: string;
    images: string[];
}

export const ImageViewer = memo(({ className, images }: ImageViewerProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState<I_Swiper>();

    const openModal = (index: number) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const changeCurrentImage = (index: number) => {
        setCurrentIndex(index);
        swiperInstance?.slideToLoop(index);
    };

    return (
        <div className={clsx(cls.ImageViewer, [className])}>
            <div className={clsx(cls.GalleryContainer, [className])}>
                <div className={cls.gallery}>
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => changeCurrentImage(index)}
                            className={clsx(cls.item, index === currentIndex ? cls.active : '')}
                        >
                            <img src={getImageUrl(image)} alt={'Sneak'} width={100} height={100} />
                        </button>
                    ))}
                </div>
                <img
                    src={getImageUrl(images[currentIndex])}
                    onClick={() => openModal(currentIndex)}
                    alt={'Sneak'}
                    width={500}
                    height={500}
                    className={cls.image}
                />
            </div>
            <Modal isVisibleCloseBtn className={cls.ModalImages} isOpen={isOpen} onClose={closeModal}>
                <Swiper
                    modules={[Navigation, Pagination, A11y, Keyboard]}
                    spaceBetween={5}
                    slidesPerView={1}
                    navigation
                    keyboard
                    onSwiper={setSwiperInstance}
                    loop={true}
                    onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
                >
                    {images.map((url, index) => (
                        <SwiperSlide key={url}>
                            <img src={getImageUrl(url)} alt={`Image ${index}`} className={cls.ImageSlide} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Modal>
        </div>
    );
});
