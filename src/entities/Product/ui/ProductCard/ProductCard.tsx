import { memo, ReactElement, useCallback } from 'react';
import clsx from 'clsx';
import cls from './ProductCard.module.scss';
import { I_Product } from '../../model/types/sneakers';

interface ProductCardProps {
    className?: string;
    product: I_Product;
    favoritesButton: ReactElement;
}

export const ProductCard = memo(
    ({ className, product: productSneaker, favoritesButton }: ProductCardProps) => {
        const { title, images, price, discount, rating } = productSneaker || {};

        const discountPrice = useCallback(() => {
            if (!discount) return price;
            return price - (price * (discount || 0)) / 100;
        }, [discount, price]);
        const colorPrice = discount ? 'var(--text-accent)' : 'var(--text)';
        return (
            <div className={clsx(cls.ProductCard, [className])}>
                <div className={cls.cardImage}>
                    <img src={images[0]} alt={title} />
                    <span className={cls.cardRating}>★ {rating}</span>
                </div>

                <div className={cls.cardInfo}>
                    <p className={cls.cardTitle}>{title}</p>
                    <div className={cls.cardLikeAndPrice}>
                        {favoritesButton}
                        <div className={cls.cardPrice}>
                            {discount && (
                                <div className={cls.discount}>
                                    <div className={cls.line} />
                                    <p>
                                        {price}
                                        $.
                                    </p>
                                </div>
                            )}
                            <p style={{ color: colorPrice }} className={cls.price}>
                                {discountPrice()} $.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
);
