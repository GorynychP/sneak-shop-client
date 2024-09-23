import { memo } from 'react';
import clsx from 'clsx';
import cls from './Cart.module.scss';
import { CartEmpty } from '../components/CartEmpty/CartEmpty';
import { CartProductCard } from '../components/CartProductCard/CartProductCard';
import { productCartData } from '../../model/data/productCartData';
import { CartTotal } from '../components/CartTotal/CartTotal';

interface CartProps {
    className?: string;
}

export const Cart = memo(({ className }: CartProps) => {
    const products = productCartData;

    const content =
        products.length !== 0 ? (
            <div className="between-start">
                <div className={cls.ProductListCart}>
                    {products.map((product) => (
                        <CartProductCard key={product.id} product={product} />
                    ))}
                </div>
                <CartTotal />
            </div>
        ) : (
            <CartEmpty />
        );

    return (
        <div className={clsx(cls.Cart, [className])}>
            <h3>Корзина</h3>
            {content}
        </div>
    );
});
