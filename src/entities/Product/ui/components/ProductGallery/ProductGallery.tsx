import { memo, useState } from 'react';
import clsx from 'clsx';
import cls from './ProductGallery.module.scss';
import { I_Product } from '../../../model/types/sneakers';

interface ProductGalleryProps {
    className?: string;
    product: I_Product;
}

export const ProductGallery = memo(({ className, product }: ProductGalleryProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className={clsx(cls.ProductGallery, [className])}>
            <div className={cls.gallery}>
                {product.images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={clsx(cls.item, index === currentIndex ? cls.active : '')}
                    >
                        <img src={image} alt={product.title} width={100} height={100} />
                    </button>
                ))}
            </div>
            <img
                src={product.images[currentIndex]}
                alt={product.title}
                width={500}
                height={500}
                className={cls.image}
            />
        </div>
    );
});
