import { memo } from 'react';
import clsx from 'clsx';
import cls from './ButtonFavorites.module.scss';
import { Popover } from '@/shared/ui/Popups';
import FavoriteImage from '@/shared/assets/icon/heart.svg';
import { FavoritesList } from '@/entities/Favorites';
import { AddToFavoritesButton } from '../../../../features/Favorites/AddToFavoritesButton';
import { AddToCartButton } from '@/features/cart/AddToCartButton';

interface ButtonFavoritesProps {
    className?: string;
}

export const ButtonFavorites = memo(({ className }: ButtonFavoritesProps) => {
    return (
        <Popover
            trigger={
                <div style={{ cursor: 'pointer' }} className="header-right-block-link">
                    <img width={32} height={28} src={FavoriteImage} />
                </div>
            }
            className={clsx(cls.ButtonFavorites, [className])}
        >
            <FavoritesList
                buttonFavorite={(productId) => (
                    <AddToFavoritesButton productId={productId} borderNone width={26} height={26} />
                )}
                buttonCart={(productId) => (
                    <AddToCartButton className={cls.cartButton} productId={productId} />
                )}
            />
        </Popover>
    );
});
