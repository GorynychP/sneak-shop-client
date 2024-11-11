import { memo, ReactElement } from 'react';
import clsx from 'clsx';
import cls from './ProductInfo.module.scss';
import { I_Product } from '../../../../../../entities/Product/model/types/product';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StatusTag } from '@/shared/ui/StatusTag';
import { discountPrice } from '@/shared/lib/utils/format/getDiscountPrice';

interface ProductInfoProps {
    className?: string;
    product: I_Product;
    buttonFavorite: ReactElement;
    buttonCart: ReactElement;
    handleClick: (num: number) => void;
    size?: number;
}

export const ProductInfo = memo(
    ({ className, product, buttonFavorite, buttonCart, handleClick, size }: ProductInfoProps) => {
        const { rating, sizes, discount, price } = product;
        return (
            <div className={clsx(cls.ProductInfo, [className])}>
                <h2 className={cls.title}>{product.title}</h2>
                <span className={cls.rating}>★ {rating > 0 && rating.toFixed(1)}</span>
                {discount > 0 ? (
                    <HStack className={cls.discountBlock} align="end" gap="20">
                        <b className={cls.discountedPrice}>{discountPrice(price, discount)} $.</b>
                        <VStack align="center">
                            <p className={cls.discount}>-{discount}%</p>
                            <b className={cls.oldPrice}>{price} $.</b>
                        </VStack>
                    </HStack>
                ) : (
                    <b className={cls.price}>{price} $.</b>
                )}

                <VStack gap="16" className={cls.sizes}>
                    <p>Размер:</p>
                    <div className={cls.sizesNum}>
                        {sizes?.map((num) => (
                            <button
                                className={clsx({ [cls.btnActive]: size === num })}
                                onClick={() => handleClick(num)}
                                key={num}
                            >
                                {num}
                            </button>
                        ))}
                    </div>
                </VStack>
                <StatusTag className={cls.existence} text="В наличии" />
                <HStack gap="24">
                    {buttonCart}
                    {buttonFavorite}
                </HStack>
            </div>
        );
    },
);
