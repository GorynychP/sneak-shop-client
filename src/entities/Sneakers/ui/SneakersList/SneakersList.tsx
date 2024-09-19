import { memo } from 'react';
import clsx from 'clsx';
import cls from './SneakersList.module.scss';
import { ProductList } from '../components/ProductList/ProductList';
import { sneakersData } from '../../model/data/sneakersData';
import { Pagination } from '@/features/Pagination';
import { VStack } from '@/shared/ui/Stack';

interface SneakersListProps {
    className?: string;
}

export const SneakersList = memo(({ className }: SneakersListProps) => {
    return (
        <VStack align="end" gap="50" className={clsx(cls.SneakersList, [className])}>
            <ProductList products={sneakersData} />
            <Pagination />
        </VStack>
    );
});
