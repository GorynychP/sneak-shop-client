import { memo, useState } from 'react';
import clsx from 'clsx';
import cls from './ButtonFavorites.module.scss';
import { Button } from '@/shared/ui/Button';
import FavoritesIcon from '@/shared/assets/icon/favorites.svg?react';
interface ButtonFavoritesProps {
    className?: string;
    borderNone?: boolean;
    // productId: string;
}

export const ButtonFavorites = memo(({ className, borderNone }: ButtonFavoritesProps) => {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <Button
            onClick={() => setIsFavorite((prev) => !prev)}
            theme={borderNone ? 'icon_button_no_border' : 'icon_button'}
            className={clsx(cls.ButtonFavorites, [className])}
        >
            <FavoritesIcon width={36} height={36} className={isFavorite ? cls.favoriteOn : cls.favoriteOff} />
        </Button>
    );
});
