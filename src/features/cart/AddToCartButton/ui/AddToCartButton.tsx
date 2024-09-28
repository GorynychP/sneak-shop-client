import { memo, ReactElement } from 'react';
import clsx from 'clsx';
import cls from './AddToCartButton.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import { getRouteCart } from '@/shared/const/router';

interface AddToCartButtonProps {
    className?: string;
    productId: string;
    theme?: ButtonTheme;
    addonLeft?: ReactElement;
    addonRight?: ReactElement;
}

export const AddToCartButton = memo(
    ({ className, productId, theme = 'filled', addonLeft, addonRight }: AddToCartButtonProps) => {
        const navigate = useNavigate();
        const addToCart = () => {
            navigate(getRouteCart());
            console.log('add to cart', productId);
        };
        return (
            <Button
                addonLeft={addonLeft}
                addonRight={addonRight}
                onClick={addToCart}
                theme={theme}
                className={clsx(cls.AddToCartButton, [className])}
            >
                В корзину
            </Button>
        );
    },
);
