import { memo } from 'react';
import clsx from 'clsx';
import cls from './ProductDetails.module.scss';
import { ProductGallery } from './components/ProductGallery/ProductGallery';
import { ProductInfo } from './components/ProductInfo/ProductInfo';
import { HStack, VStack } from '@/shared/ui/Stack';
import { I_Product } from '@/entities/Product';
import { AddToFavoritesButton } from '@/features/Favorites/AddToFavoritesButton';
import { AddToCartButton } from '@/features/cart/AddToCartButton';
import CartIcon from '@/shared/assets/icon/shopping-cart.svg?react';

interface ProductDetailsProps {
    className?: string;
    product: I_Product;
}

export const ProductDetails = memo(({ className, product }: ProductDetailsProps) => {
    return (
        <VStack align="start" gap="44" className={clsx(cls.SneakersDetails, [className])}>
            <HStack align="center" gap="44">
                <ProductGallery product={product} />
                <ProductInfo
                    product={product}
                    buttonCart={
                        <AddToCartButton
                            addonLeft={<CartIcon className={cls.cartIcon} />}
                            theme="accent_button"
                            className={cls.cartButton}
                            product={product}
                        />
                    }
                    buttonFavorite={<AddToFavoritesButton product={product} />}
                />
            </HStack>
            <div className={cls.description}>
                <h3 className={cls.title}>Описание:</h3>
                <p className={cls.text}>{product.description}</p>
            </div>
        </VStack>
    );
});
