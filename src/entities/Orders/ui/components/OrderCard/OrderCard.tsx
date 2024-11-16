import { memo } from 'react';
import { I_CartItem } from '@/entities/Cart/model/types/cart';
import { VStack } from '@/shared/ui/Stack';
import clsx from 'clsx';
import cls from './OrderCard.module.scss';

interface OrderCardProps {
    className?: string;
    order: I_CartItem;
}

export const OrderCard = memo(({ className, order }: OrderCardProps) => {
    const { product, size, quantity } = order;
    const { images, title } = product;
    return (
        <div className={clsx(cls.OrderCard, [className])}>
            <img src={images[0]} alt="sneaker" width={100} height={100} />
            <VStack gap="8" className={cls.productInfo}>
                <div className="column gap-xxs">
                    <h4>{title}</h4> <p>Размер: {size}</p> <p>Количество: {quantity}</p>
                </div>
            </VStack>
        </div>
    );
});
