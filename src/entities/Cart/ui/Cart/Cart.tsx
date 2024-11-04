import { memo } from 'react';
import clsx from 'clsx';
import cls from './Cart.module.scss';
import { CartEmpty } from '../components/CartEmpty/CartEmpty';
import { CartProductCard } from '../components/CartProductCard/CartProductCard';
// import { productCartData } from '../../data/productCartData';
import { CartTotal } from '../components/CartTotal/CartTotal';
import { useCart } from '../../model/hooks/useCart';
import { useCartActions } from '../../model/hooks/useCartActions';
import { HStack } from '@/shared/ui/Stack';

interface CartProps {
    className?: string;
}

export const Cart = memo(({ className }: CartProps) => {
    const { cartItems, totalPrice, discountTotalPrice, discount, count } = useCart();
    const { clearCart } = useCartActions();

    const content =
        cartItems.length !== 0 ? (
            <div className="between-start">
                <div className={cls.ProductListCart}>
                    {cartItems.map((item) => (
                        <CartProductCard key={item.id} cartItem={item} />
                    ))}
                </div>
                <CartTotal
                    totalPrice={totalPrice}
                    discountTotalPrice={discountTotalPrice}
                    discount={discount}
                    count={count}
                />
            </div>
        ) : (
            <CartEmpty />
        );

    return (
        <div className={clsx(cls.Cart, [className])}>
            <HStack align="center" gap="24">
                <h3>Корзина</h3>
                <span className={cls.clear} onClick={() => clearCart()}>
                    Очистить корзину
                </span>
            </HStack>
            {content}
        </div>
    );
});
