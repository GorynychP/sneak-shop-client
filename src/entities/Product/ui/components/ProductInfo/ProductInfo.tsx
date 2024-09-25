import { memo, ReactElement } from 'react';
import clsx from 'clsx';
import cls from './ProductInfo.module.scss';
import { I_Product } from '../../../model/types/sneakers';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Existence } from '@/shared/ui/Existence';
import { Button } from '@/shared/ui/Button';
import CartIcon from '@/shared/assets/icon/shopping-cart.svg?react';
import { useNavigate } from 'react-router-dom';
import { getRouteCart } from '@/shared/const/router';

interface ProductInfoProps {
    className?: string;
    product: I_Product;
    buttonFavorite: ReactElement;
}

export const ProductInfo = memo(({ className, product, buttonFavorite }: ProductInfoProps) => {
    const navigate = useNavigate();
    const { rating, sizes } = product;
    return (
        <div className={clsx(cls.ProductInfo, [className])}>
            <h2 className={cls.title}>{product.title}</h2>
            <span className={cls.rating}>★ {rating.toFixed(1)}</span>
            <b className={cls.price}>{product.price} $.</b>
            <VStack gap="16" className={cls.sizes}>
                <p>Размер:</p>
                <div className={cls.sizesNum}>
                    {sizes?.map((num) => (
                        <button key={num}>{num}</button>
                    ))}
                </div>
            </VStack>
            <Existence />
            <HStack gap="8">
                <Button
                    onClick={() => navigate(getRouteCart())}
                    addonLeft={<CartIcon className={cls.cartIcon} />}
                    theme="accent_button"
                >
                    В корзину
                </Button>
                {buttonFavorite}
            </HStack>
        </div>
    );
});
