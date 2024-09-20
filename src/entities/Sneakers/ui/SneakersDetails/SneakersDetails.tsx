import { memo } from 'react';
import clsx from 'clsx';
import cls from './SneakersDetails.module.scss';
// import { I_ProductSneakers } from '../../model/types/sneakers';
import { sneakersData } from '../../model/data/sneakersData';
import { ProductGallery } from '../components/ProductGallery/ProductGallery';
import { ProductInfo } from '../components/ProductInfo/ProductInfo';
import { HStack, VStack } from '@/shared/ui/Stack';

interface SneakersDetailsProps {
    className?: string;
    // product: I_ProductSneakers;
}

export const SneakersDetails = memo(({ className }: SneakersDetailsProps) => {
    const product = sneakersData[0];
    return (
        <VStack align="start" gap="44" className={clsx(cls.SneakersDetails, [className])}>
            <HStack align="start" gap="44">
                <ProductGallery product={product} />
                <ProductInfo product={product} />
            </HStack>
            <div className={cls.description}>
                <h3 className={cls.title}>Описание:</h3>
                <p className={cls.text}>{product.description}</p>
            </div>
        </VStack>
    );
});
