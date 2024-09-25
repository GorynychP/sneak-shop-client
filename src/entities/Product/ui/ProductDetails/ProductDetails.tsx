import { memo, ReactElement } from 'react';
import clsx from 'clsx';
import cls from './ProductDetails.module.scss';
// import { I_ProductSneakers } from '../../model/types/sneakers';
import { sneakersData } from '../../model/data/sneakersData';
import { ProductGallery } from '../components/ProductGallery/ProductGallery';
import { ProductInfo } from '../components/ProductInfo/ProductInfo';
import { HStack, VStack } from '@/shared/ui/Stack';

interface ProductDetailsProps {
    className?: string;
    buttonFavorite: ReactElement;
}

export const ProductDetails = memo(({ className, buttonFavorite }: ProductDetailsProps) => {
    const product = sneakersData[0];
    return (
        <VStack align="start" gap="44" className={clsx(cls.SneakersDetails, [className])}>
            <HStack align="center" gap="44">
                <ProductGallery product={product} />
                <ProductInfo product={product} buttonFavorite={buttonFavorite} />
            </HStack>
            <div className={cls.description}>
                <h3 className={cls.title}>Описание:</h3>
                <p className={cls.text}>{product.description}</p>
            </div>
        </VStack>
    );
});
