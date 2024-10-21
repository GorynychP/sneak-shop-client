import { memo, ReactElement } from 'react';
import clsx from 'clsx';
import cls from './ProductCard.module.scss';
import { I_Product } from '../../model/types/product';
import { discountPrice } from '../../lib/utils/getDiscountPrice';

interface ProductCardProps {
    className?: string;
    product: I_Product;
    favoritesButton: ReactElement;
}

export const ProductCard = memo(
    ({ className, product: productSneaker, favoritesButton }: ProductCardProps) => {
        const { title, images, price, discount, rating } = productSneaker || {};
        const ratingDefault = 5;
        const colorPrice = discount > 0 ? 'var(--text-accent)' : 'var(--text)';
        const ratingFormat = rating === 0 ? ratingDefault.toFixed(1) : rating.toFixed(1);
        return (
            <div className={clsx(cls.ProductCard, [className])}>
                <div className={cls.cardImage}>
                    <img src={images[0]} alt={title} />
                    <span className={cls.cardRating}>★ {ratingFormat}</span>
                </div>

                <div className={cls.cardInfo}>
                    <p className={cls.cardTitle}>{title}</p>
                    <div className={cls.cardLikeAndPrice}>
                        {favoritesButton}
                        <div className={cls.cardPrice}>
                            {discount > 0 && (
                                <div className={cls.discount}>
                                    <div className={cls.line} />
                                    <p>
                                        {price}
                                        $.
                                    </p>
                                </div>
                            )}
                            <p style={{ color: colorPrice }} className={cls.price}>
                                {discountPrice(price, discount)} $.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
);
