import { memo, ReactElement } from 'react';
import clsx from 'clsx';
import cls from './ProductCard.module.scss';
import { I_Product } from '../../model/types/product';
import { AppLink } from '@/shared/ui/AppLink';
import { discountPrice } from '@/shared/lib/utils/format/getDiscountPrice';
import { HStack } from '@/shared/ui/Stack';
import { getImageUrl } from '@/shared/lib/utils/format/getImageUrl';

interface ProductCardProps {
    className?: string;
    product: I_Product;
    favoritesButton: ReactElement;
    link?: string;
}

export const ProductCard = memo(
    ({ className, product: productSneaker, favoritesButton, link }: ProductCardProps) => {
        const { title, images, price, discount, rating } = productSneaker || {};
        // const ratingDefault = 5;
        const colorPrice = discount > 0 ? 'var(--text-accent)' : 'var(--text)';
        const ratingFormat = rating === 0 ? undefined : rating.toFixed(1);
        return (
            <div className={clsx(cls.ProductCard, [className])}>
                <AppLink to={link || productSneaker.id} className={cls.cardImage}>
                    <img src={getImageUrl(images[0])} alt={title} />
                    <span className={cls.cardRating}>★ {ratingFormat}</span>
                </AppLink>

                <div className={cls.cardInfo}>
                    <AppLink to={link || productSneaker.id} className={cls.cardTitle}>
                        {title}
                    </AppLink>
                    <div className={cls.cardLikeAndPrice}>
                        {favoritesButton}
                        <div className={cls.cardPrice}>
                            {discount > 0 && (
                                <HStack align="center" gap="4">
                                    <div className={cls.discountPrice}>
                                        <div className={cls.line} />
                                        <p>
                                            {price}
                                            $.
                                        </p>
                                    </div>
                                    <p className={cls.discount}>-{discount}%</p>
                                </HStack>
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
