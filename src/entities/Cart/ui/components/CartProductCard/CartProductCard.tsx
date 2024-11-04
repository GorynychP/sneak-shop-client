import { memo } from 'react';
import clsx from 'clsx';
import cls from './CartProductCard.module.scss';
import DeleteImage from '@/shared/assets/icon/trash-solid.svg?react';
import { I_CartItem } from '../../../model/types/cart';
import { useCartActions } from '@/entities/Cart/model/hooks/useCartActions';
import { HStack } from '@/shared/ui/Stack';
import { formatUSD } from '@/shared/lib/utils/format/currency';
import { AppLink } from '@/shared/ui/AppLink';
import { getRouteProductDetails } from '@/shared/constants/router';
interface CartProductCardProps {
    className?: string;
    cartItem: I_CartItem;
}

export const CartProductCard = memo(({ className, cartItem }: CartProductCardProps) => {
    const { quantity, discountPrice } = cartItem;
    const { title, discount, images, sizes, price } = cartItem.product;
    const { changeQuantity, removeFromCart } = useCartActions();
    const priceFormatted = formatUSD(price);
    function totalPriceOneProduct(price: number) {
        return formatUSD(price * quantity);
    }

    return (
        <div className={clsx(cls.CartProductCard, [className])}>
            <AppLink to={getRouteProductDetails(cartItem.product.id)}>
                <img src={images[0]} alt="sneaker" width={186} height={167} />
            </AppLink>
            <div className={cls.productInfo}>
                <div className="column gap-xxs">
                    <AppLink to={getRouteProductDetails(cartItem.product.id)}>
                        <h3>{title}</h3>{' '}
                    </AppLink>
                    <p style={{ display: 'flex' }}>
                        Размер:{' '}
                        {sizes?.map((size) => (
                            <p>{size}, </p>
                        ))}
                    </p>
                </div>
                <div className="column gap-xxs">
                    <HStack max align="center" justify="between" gap="8">
                        <p>Цена: </p>
                        <HStack gap="8">
                            {discount > 0 ? (
                                <>
                                    <span className={cls.oldPrice}>{priceFormatted}</span>
                                    <span className={cls.discountPrice}>-{discount} %</span>
                                    <span className={cls.price}>{formatUSD(discountPrice)}</span>
                                </>
                            ) : (
                                <span className={cls.price}>{priceFormatted}</span>
                            )}
                        </HStack>
                    </HStack>

                    <div className="between">
                        <div className="center gap-xs">
                            <div className={cls.counter}>
                                <button onClick={() => changeQuantity({ id: cartItem.id, type: 'minus' })}>
                                    -
                                </button>
                                <p>{quantity}</p>
                                <button onClick={() => changeQuantity({ id: cartItem.id, type: 'plus' })}>
                                    +
                                </button>
                            </div>
                            <DeleteImage
                                onClick={() => removeFromCart({ id: cartItem.id })}
                                className={cls.deleteImg}
                            />
                        </div>

                        <div>
                            Всего:
                            <span> {totalPriceOneProduct(discountPrice)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
