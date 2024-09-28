import { memo, ReactNode, useCallback } from 'react';
import clsx from 'clsx';
import cls from './FavoritesList.module.scss';
import { favoritesData } from '../../api';
import { FavoriteItem } from '../FavoriteItem/FavoriteItem';
import { VStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { I_Favorites } from '../../model/types/favorites';

interface FavoritesListProps {
    className?: string;

    buttonFavorite: (productId: string) => ReactNode;
    buttonCart: (productId: string) => ReactNode;
}

export const FavoritesList = memo(({ className, buttonFavorite, buttonCart }: FavoritesListProps) => {
    const favorites = favoritesData;

    const getFavoriteSlot = useCallback(
        (favorite: I_Favorites) => {
            if (buttonFavorite) {
                return buttonFavorite(favorite.id);
            }

            return null;
        },
        [buttonFavorite],
    );
    const getCartSlot = useCallback(
        (favorite: I_Favorites) => {
            if (buttonCart) {
                return buttonCart(favorite.id);
            }

            return null;
        },
        [buttonCart],
    );

    return (
        <VStack align="end" justify="between" gap="44" className={clsx(cls.FavoritesList, [className])}>
            <VStack gap="20" className={cls.list}>
                {favorites.length !== 0 &&
                    favorites.map((favorite) => (
                        <FavoriteItem
                            buttonFavorite={getFavoriteSlot(favorite)}
                            buttonCart={getCartSlot(favorite)}
                            key={favorite.id}
                            favorite={favorite}
                        />
                    ))}
            </VStack>
            <Button theme="filled">Убрать все</Button>
        </VStack>
    );
});
