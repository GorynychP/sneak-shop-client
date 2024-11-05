import { memo } from 'react';
import clsx from 'clsx';
import cls from './AddToFavoritesButton.module.scss';
import { Button } from '@/shared/ui/Button';
import FavoritesIcon from '@/shared/assets/icon/favorites.svg?react';
import { selectIsInFavorites, useFavoritesAction } from '@/entities/Favorites';
import { I_Product } from '@/entities/Product';
import { useAppSelector } from '@/shared/model';
import toast from 'react-hot-toast';

interface AddToFavoritesButtonProps {
    className?: string;
    product: I_Product;
    borderNone?: boolean;
    width?: number;
    height?: number;
}

export const AddToFavoritesButton = memo(
    ({ className, product, borderNone, width = 36, height = 36 }: AddToFavoritesButtonProps) => {
        const isInWishlist = useAppSelector((state) => selectIsInFavorites(state, product.id));
        const { toggleFavoritesProduct, deleteProductToFavorites, addProductToFavorites } =
            useFavoritesAction();

        const onClickButtonFavorite = () => {
            toggleFavoritesProduct(product.id);
            if (isInWishlist) {
                deleteProductToFavorites(product);
            } else {
                toast.success('Добавлено в избранное');
                addProductToFavorites(product);
            }
        };
        return (
            <Button
                onClick={onClickButtonFavorite}
                theme={borderNone ? 'icon_button_no_border' : 'icon_button'}
                className={clsx(cls.AddToFavoritesButton, [className])}
            >
                <FavoritesIcon
                    width={width}
                    height={height}
                    className={isInWishlist ? cls.favoriteOn : cls.favoriteOff}
                />
            </Button>
        );
    },
);
