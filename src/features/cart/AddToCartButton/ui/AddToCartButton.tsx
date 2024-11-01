import { memo, ReactElement } from 'react';
import clsx from 'clsx';
import cls from './AddToCartButton.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import { getRouteCart } from '@/shared/constants/router';
import { useClose } from '@headlessui/react';
import { I_Product } from '@/entities/Product';

interface AddToCartButtonProps {
    className?: string;
    product: I_Product;
    theme?: ButtonTheme;
    addonLeft?: ReactElement;
    addonRight?: ReactElement;
}

export const AddToCartButton = memo(
    ({ className, product, theme = 'filled', addonLeft, addonRight }: AddToCartButtonProps) => {
        const navigate = useNavigate();
        const close = useClose();
        const addToCart = () => {
            console.log('product Добавлен в корзину', product.id);
            navigate(getRouteCart());
            close();
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
