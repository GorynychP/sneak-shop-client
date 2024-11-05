import { memo, ReactElement } from 'react';
import clsx from 'clsx';
import cls from './AddToCartButton.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import { getRouteCart } from '@/shared/constants/router';
import { useClose } from '@headlessui/react';
import { I_Product } from '@/entities/Product';
import { useCartActions } from '@/entities/Cart';
import { discountPrice } from '@/shared/lib/utils/format/getDiscountPrice';
import toast from 'react-hot-toast';

interface AddToCartButtonProps {
    className?: string;
    product: I_Product;
    theme?: ButtonTheme;
    addonLeft?: ReactElement;
    addonRight?: ReactElement;
    size?: number;
}

export const AddToCartButton = memo(
    ({ className, product, theme = 'filled', addonLeft, addonRight, size }: AddToCartButtonProps) => {
        const navigate = useNavigate();
        const close = useClose();
        const { addToCart } = useCartActions();
        const handlerAddToCart = () => {
            if (!size) {
                toast('Выберите размер');
                return;
            }
            addToCart({
                product,
                quantity: 1,
                price: product.price,
                discountPrice: discountPrice(product.price, product.discount) || 0,
                discount: product.discount,
                size: size,
            });
            navigate(getRouteCart());
            close();
        };
        return (
            <Button
                addonLeft={addonLeft}
                addonRight={addonRight}
                onClick={handlerAddToCart}
                theme={theme}
                className={clsx(cls.AddToCartButton, [className])}
            >
                В корзину
            </Button>
        );
    },
);
