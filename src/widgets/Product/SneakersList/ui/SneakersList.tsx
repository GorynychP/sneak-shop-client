import { memo } from 'react';
import clsx from 'clsx';
import cls from './SneakersList.module.scss';
import { Pagination } from '@/features/Pagination';
import { VStack } from '@/shared/ui/Stack';
import { ProductList, sneakersData } from '@/entities/Product';
import { ButtonFavorites } from '@/features/Product/ButtonFavorites';

interface SneakersListProps {
    className?: string;
}

export const SneakersList = memo(({ className }: SneakersListProps) => {
    return (
        <VStack align="end" gap="50" className={clsx(cls.SneakersList, [className])}>
            <ProductList products={sneakersData} favoritesButton={<ButtonFavorites borderNone />} />
            <Pagination />
        </VStack>
    );
});
