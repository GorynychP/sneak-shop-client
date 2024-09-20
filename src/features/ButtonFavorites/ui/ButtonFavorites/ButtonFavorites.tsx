import { memo, useState } from 'react';
import clsx from 'clsx';
import cls from './ButtonFavorites.module.scss';
import { Button } from '@/shared/ui/Button';
import FavoritesIcon from '@/shared/assets/icon/favorites.svg?react';
interface ButtonFavoritesProps {
    className?: string;
}

export const ButtonFavorites = memo(({ className }: ButtonFavoritesProps) => {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <Button
            onClick={() => setIsFavorite((prev) => !prev)}
            theme="icon_button"
            className={clsx(cls.ButtonFavorites, [className])}
        >
            <FavoritesIcon className={isFavorite ? cls.favoriteOn : cls.favoriteOff} />
        </Button>
    );
});
