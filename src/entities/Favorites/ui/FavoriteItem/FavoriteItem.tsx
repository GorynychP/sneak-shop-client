import { memo, ReactNode } from 'react';
import clsx from 'clsx';
import cls from './FavoriteItem.module.scss';
import { I_Favorites } from '../../model/types/favorites';
import { VStack } from '@/shared/ui/Stack';

interface FavoriteItemProps {
    className?: string;
    favorite: I_Favorites;
    buttonFavorite: ReactNode;
    buttonCart: ReactNode;
}

export const FavoriteItem = memo(({ className, favorite, buttonFavorite, buttonCart }: FavoriteItemProps) => {
    return (
        <div className={clsx(cls.FavoriteItem, [className])}>
            <img src={favorite.image} alt={favorite.title} />
            <VStack justify="between" max>
                <div className={cls.infoTop}>
                    <span className={cls.title}>{favorite.title}</span>
                    {buttonFavorite}
                </div>
                <div className={cls.infoBottom}>
                    <span className={cls.price}>{favorite.price}$.</span>
                    {buttonCart}
                </div>
            </VStack>
        </div>
    );
});
