import { memo } from 'react';
import clsx from 'clsx';
import cls from './ProductInfo.module.scss';
import { I_ProductSneakers } from '../../../model/types/sneakers';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Existence } from '@/shared/ui/Existence';
import { Button } from '@/shared/ui/Button';
import { ButtonFavorites } from '@/features/ButtonFavorites';
import CartIcon from '@/shared/assets/icon/shopping-cart.svg?react';

interface ProductInfoProps {
    className?: string;
    product: I_ProductSneakers;
}

export const ProductInfo = memo(({ className, product }: ProductInfoProps) => {
    const { rating, sizes } = product;
    return (
        <div className={clsx(cls.ProductInfo, [className])}>
            <h2 className={cls.title}>{product.title}</h2>
            <span className={cls.rating}>★ {rating.toFixed(1)}</span>
            <b className={cls.price}>{product.price} $.</b>
            <VStack gap="20" className={cls.sizes}>
                <p>Размер:</p>
                <div className={cls.sizesNum}>
                    {sizes?.map((num) => (
                        <button key={num}>{num}</button>
                    ))}
                </div>
            </VStack>
            <Existence />
            <HStack gap="8">
                <Button addonLeft={<CartIcon className={cls.cartIcon} />} theme="accent_button">
                    В корзину
                </Button>
                <ButtonFavorites />
            </HStack>
        </div>
    );
});
