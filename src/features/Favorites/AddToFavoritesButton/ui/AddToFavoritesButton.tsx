import { memo, useState } from 'react';
import clsx from 'clsx';
import cls from './AddToFavoritesButton.module.scss';
import { Button } from '@/shared/ui/Button';
import FavoritesIcon from '@/shared/assets/icon/favorites.svg?react';
interface AddToFavoritesButtonProps {
    className?: string;
    productId: string;
    borderNone?: boolean;
    width?: number;
    height?: number;
}

export const AddToFavoritesButton = memo(
    ({ className, productId, borderNone, width = 36, height = 36 }: AddToFavoritesButtonProps) => {
        const [isFavorite, setIsFavorite] = useState(false);
        const onClickButtonFavorite = () => {
            setIsFavorite((prev) => !prev);
            console.log(productId);
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
                    className={isFavorite ? cls.favoriteOn : cls.favoriteOff}
                />
            </Button>
        );
    },
);
