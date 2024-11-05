import { memo, ReactNode } from 'react';
import clsx from 'clsx';
import cls from './FavoriteItem.module.scss';
import { VStack } from '@/shared/ui/Stack';

import { I_Product } from '@/entities/Product';
import { AppLink } from '@/shared/ui/AppLink';
import { getRouteProductDetails } from '@/shared/constants/router';
import { discountPrice } from '@/shared/lib/utils/format/getDiscountPrice';

interface FavoriteItemProps {
    className?: string;
    favorite: I_Product;
    buttonFavorite: ReactNode;
    buttonCart: ReactNode;
    close: () => void;
}

export const FavoriteItem = memo(({ className, favorite, buttonFavorite, close }: FavoriteItemProps) => {
    const { title, images, price, discount } = favorite;

    return (
        <div className={clsx(cls.FavoriteItem, [className])}>
            <AppLink onClick={close} className={cls.imageLink} to={getRouteProductDetails(favorite.id)}>
                <img src={images[0]} alt={title} />
            </AppLink>
            <VStack justify="between" max>
                <div className={cls.infoTop}>
                    <AppLink onClick={close} to={getRouteProductDetails(favorite.id)} className={cls.title}>
                        {title}
                    </AppLink>
                    {buttonFavorite}
                </div>
                <div className={cls.infoBottom}>
                    {discount > 0 ? (
                        <span className={cls.discountedPrice}>{discountPrice(price, discount)}$.</span>
                    ) : (
                        <span className={cls.price}>{price}$.</span>
                    )}
                    {/* {buttonCart} */}
                </div>
            </VStack>
        </div>
    );
});
