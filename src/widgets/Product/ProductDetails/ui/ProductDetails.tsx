import { memo, useState } from 'react';
import clsx from 'clsx';
import cls from './ProductDetails.module.scss';
import { ProductGallery } from './components/ProductGallery/ProductGallery';
import { ProductInfo } from './components/ProductInfo/ProductInfo';
import { HStack, VStack } from '@/shared/ui/Stack';
import { I_Product } from '@/entities/Product';
import { AddToFavoritesButton } from '@/features/Favorites/AddToFavoritesButton';
import { AddToCartButton } from '@/features/cart/AddToCartButton';
import CartIcon from '@/shared/assets/icon/shopping-cart.svg?react';
import { Tabs } from '@/shared/ui/Tabs';

import { CommentContainer } from './components/Tabs/CommentContainer/CommentContainer';
import { DescriptionContainer } from './components/Tabs/DescriptionContainer/DescriptionContainer';
import { CharacteristicsContainer } from './components/Tabs/CharacteristicsContainer/CharacteristicsContainer';
import {
    renderProductContent,
    renderProductTabs,
    T_ContentProductTabs,
} from './components/Tabs/renderTabs/renderProductTabs';

interface ProductDetailsProps {
    className?: string;
    product: I_Product;
}

export const ProductDetails = memo(({ className, product }: ProductDetailsProps) => {
    const [sizeNum, setSizeNum] = useState<undefined | number>(undefined);
    const handleClick = (numSize: number) => {
        setSizeNum(numSize);
    };

    const categories: T_ContentProductTabs[] = [
        {
            name: 'Описание',
            type: 'description',
            textComponent: <DescriptionContainer text={product.description} />,
        },
        {
            name: 'Отзывы',
            type: 'comments',
            count: product?.review?.length || 0,
            commentsComponent: <CommentContainer comments={product.review} />,
        },

        {
            name: 'Характеристики',
            type: 'characteristics',
            characteristicsComponent: <CharacteristicsContainer />,
        },
    ];

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
                            size={sizeNum}
                        />
                    }
                    buttonFavorite={<AddToFavoritesButton product={product} />}
                    handleClick={handleClick}
                    size={sizeNum}
                />
            </HStack>
            <Tabs<T_ContentProductTabs>
                renderTabs={renderProductTabs}
                categories={categories}
                renderContent={renderProductContent}
            />
        </VStack>
    );
});
