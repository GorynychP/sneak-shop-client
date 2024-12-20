import { memo } from 'react';
import clsx from 'clsx';
import cls from './SneakersList.module.scss';
import { Pagination } from '@/features/Pagination';
import { VStack } from '@/shared/ui/Stack';
import { I_Product } from '@/entities/Product';
import { ProductList } from '../../ProductList/ProductList';
import { Skeleton } from '@/shared/ui/Skeleton';

interface SneakersListProps {
    className?: string;
    products?: I_Product[];
    // setPage: Dispatch<SetStateAction<number>>;
    isLoading?: boolean;
    isError?: boolean;
    totalCount?: number;
}

export const SneakersList = memo(
    ({ className, products, isLoading, isError, totalCount }: SneakersListProps) => {
        if (isLoading)
            return (
                <div className={clsx(cls.SkeletonList, [className])}>
                    {Array.from({ length: 9 }).map((_, index) => (
                        <Skeleton className={cls.skeleton} key={index} width={240} height={360} />
                    ))}
                </div>
            );
        if (isError) return <div>Error</div>;
        if (!products) return <h2> Товар не найден</h2>;
        return (
            <VStack align="end" gap="50" className={clsx(cls.SneakersList, [className])}>
                <ProductList products={products} />
                <Pagination totalCount={totalCount} />
            </VStack>
        );
    },
);
