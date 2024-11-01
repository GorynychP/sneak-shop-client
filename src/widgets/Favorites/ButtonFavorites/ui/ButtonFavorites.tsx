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
                buttonFavorite={(product) => (
                    <AddToFavoritesButton product={product} borderNone width={26} height={26} />
                )}
                buttonCart={(product) => <AddToCartButton className={cls.cartButton} product={product} />}
            />
        </Popover>
    );
});
