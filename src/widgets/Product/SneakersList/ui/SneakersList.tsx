import { memo } from 'react';
import clsx from 'clsx';
import cls from './SneakersList.module.scss';
import { Pagination } from '@/features/Pagination';
import { VStack } from '@/shared/ui/Stack';
import { I_Product, ProductList } from '@/entities/Product';

interface SneakersListProps {
    className?: string;
    products: I_Product[];
}

export const SneakersList = memo(({ className, products }: SneakersListProps) => {
    return (
        <VStack align="end" gap="50" className={clsx(cls.SneakersList, [className])}>
            <ProductList products={products} />
            <Pagination />
        </VStack>
    );
});
