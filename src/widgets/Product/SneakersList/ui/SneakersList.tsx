import { Dispatch, memo, SetStateAction } from 'react';
import clsx from 'clsx';
import cls from './SneakersList.module.scss';
import { Pagination } from '@/features/Pagination';
import { VStack } from '@/shared/ui/Stack';
import { I_Product, ProductList } from '@/entities/Product';
import { PageLoader } from '@/widgets/PageLoader';
import { Loader } from '@/shared/ui/Loader';

interface SneakersListProps {
    className?: string;
    products?: I_Product[];
    // setPage: Dispatch<SetStateAction<number>>;
    isLoading?: boolean;
    isError?: boolean;
}

export const SneakersList = memo(({ className, products, isLoading, isError }: SneakersListProps) => {
    if (isLoading) return <PageLoader />;
    if (isError) return <div>Error</div>;
    if (!products) return <h2> Товар не найден</h2>;
    return (
        <VStack align="end" gap="50" className={clsx(cls.SneakersList, [className])}>
            <ProductList products={products} />
            <Pagination />
        </VStack>
    );
});
