import { memo, ReactNode, useCallback } from 'react';
import clsx from 'clsx';
import cls from './FavoritesList.module.scss';
import { FavoriteItem } from '../FavoriteItem/FavoriteItem';
import { VStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/model';
import { favoritesActions } from '../../model/slice/favoritesSlice';

import { I_Product } from '@/entities/Product';
import { getRouteForMen } from '@/shared/constants/router';
import { useNavigate } from 'react-router-dom';
import { useClose } from '@headlessui/react';
import { PageLoader } from '@/widgets/PageLoader';
import { useCreateFavorites } from '../../api/useCreateFavorites';

interface FavoritesListProps {
    className?: string;

    buttonFavorite: (product: I_Product) => ReactNode;
    buttonCart: (product: I_Product) => ReactNode;
}

export const FavoritesList = memo(({ className, buttonFavorite, buttonCart }: FavoritesListProps) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const closePopover = useClose();

    const { favorites, isPending } = useCreateFavorites();

    const getFavoriteSlot = useCallback(
        (favorite: I_Product) => {
            if (buttonFavorite) {
                return buttonFavorite(favorite);
            }

            return null;
        },
        [buttonFavorite],
    );

    const getCartSlot = useCallback(
        (favorite: I_Product) => {
            if (buttonCart) {
                return buttonCart(favorite);
            }

            return null;
        },
        [buttonCart],
    );

    const clearFavoritesList = () => {
        dispatch(favoritesActions.clearFavoritesData());
    };

    const handlerClosePopover = () => {
        navigate(getRouteForMen());
        closePopover();
    };

    return (
        <VStack align="end" justify="between" gap="44" className={clsx(cls.FavoritesList, [className])}>
            <VStack gap="20" max className={cls.list}>
                {isPending ? (
                    <PageLoader className={cls.loader} />
                ) : favorites.length > 0 ? (
                    favorites.map((favorite) => (
                        <FavoriteItem
                            buttonFavorite={getFavoriteSlot(favorite)}
                            buttonCart={getCartSlot(favorite)}
                            key={favorite.id}
                            favorite={favorite}
                            close={closePopover}
                        />
                    ))
                ) : (
                    <div className={cls.empty}>
                        <h3 className={cls.emptyTitle}>Вы еще не добавили ни одного продукта в избранное</h3>
                        <Button
                            style={{ margin: '0 right' }}
                            theme="accent_button"
                            onClick={handlerClosePopover}
                        >
                            Перейти в каталог
                        </Button>
                    </div>
                )}
            </VStack>
            <Button disabled={isPending} onClick={clearFavoritesList} theme="filled">
                Убрать все
            </Button>
        </VStack>
    );
});
