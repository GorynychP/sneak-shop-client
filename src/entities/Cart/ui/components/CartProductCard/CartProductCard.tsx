import { memo } from 'react';
import clsx from 'clsx';
import cls from './CartProductCard.module.scss';
import { I_CartProduct } from '../../../model/types/cart';
import DeleteImage from '@/shared/assets/icon/trash-solid.svg?react';
interface CartProductCardProps {
    className?: string;
    product: I_CartProduct;
}

export const CartProductCard = memo(({ className, product }: CartProductCardProps) => {
    const { title, image, size, discountedPrice, quantity, total } = product;
    return (
        <div className={clsx(cls.CartProductCard, [className])}>
            <img src={image} alt="sneaker" width={186} height={167} />
            <div className={cls.productInfo}>
                <div className="column gap-xxs">
                    <h3>{title}</h3> <p>Размер: {size}</p>
                </div>
                <div className="column">
                    {discountedPrice && <span className={cls.discountedPrice}> {total}$.</span>}
                    <div className="between">
                        <div className="center gap-xs">
                            <div className={cls.counter}>
                                <button>-</button>
                                <p>{quantity}</p>
                                <button>+</button>
                            </div>
                            <DeleteImage className={cls.deleteImg} />
                        </div>

                        <div>
                            Всего:
                            <span> {discountedPrice ? discountedPrice : total}$.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
