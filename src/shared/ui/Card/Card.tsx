import { memo, useCallback, useState } from 'react';
import clsx from 'clsx';
import cls from './Card.module.scss';

import FavoritesIcon from '@/shared/assets/icon/heartCard.svg';
import FavoritesLikeIcon from '@/shared/assets/icon/heartRed.svg';

interface I_ProductSneaker {
    name: string;
    icon: string;
    price: number;
    rating: number;
    discount?: number;
}
interface CardProps {
    className?: string;
    productSneaker: I_ProductSneaker;
}

export const Card = memo(({ className, productSneaker }: CardProps) => {
    const { name, icon, price, discount, rating } = productSneaker || {};
    const [isFavorites, setIsFavorites] = useState(false);
    const onFavorites = () => {
        setIsFavorites(!isFavorites);
    };

    const discountPrice = useCallback(() => {
        if (!discount) return price;
        return price - (price * (discount || 0)) / 100;
    }, [discount, price]);
    const colorPrice = discount ? 'var(--text-accent)' : 'var(--text)';
    return (
        <div className={clsx(cls.Card, [className])}>
            <div className={cls.cardImage}>
                <img src={icon} alt={name} />
                <span className={cls.cardRating}>★ {rating}</span>
            </div>

            <div className={cls.cardInfo}>
                <p className={cls.cardTitle}>{name}</p>
                <div className={cls.cardLikeAndPrice}>
                    <img
                        width={32}
                        height={32}
                        src={isFavorites ? FavoritesLikeIcon : FavoritesIcon}
                        alt="heart"
                        onClick={onFavorites}
                    />
                    <div className={cls.cardPrice}>
                        {discount && (
                            <div className={cls.discount}>
                                <div className={cls.line} />
                                <p>
                                    {price}
                                    руб.
                                </p>
                            </div>
                        )}
                        <p style={{ color: colorPrice }} className={cls.price}>
                            {discountPrice()} руб.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
});
