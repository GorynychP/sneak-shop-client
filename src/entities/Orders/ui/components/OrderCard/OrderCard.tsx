import { memo } from 'react';
import clsx from 'clsx';
import cls from './OrderCard.module.scss';
import { EnumOrderStatus } from '../../../model/types/order';
import { I_CartProduct } from '@/entities/Cart/model/types/cart';
import { StatusTag } from '@/shared/ui/StatusTag';
import { VStack } from '@/shared/ui/Stack';

interface OrderCardProps {
    className?: string;
    order: I_CartProduct;
    status: EnumOrderStatus;
}

export const OrderCard = memo(({ className, order }: OrderCardProps) => {
    const { image, title, size } = order;
    return (
        <div className={clsx(cls.OrderCard, [className])}>
            <img src={image} alt="sneaker" width={186} height={167} />
            <VStack gap="8" className={cls.productInfo}>
                <div className="column gap-xxs">
                    <h3>{title}</h3> <p>Размер: {size}</p>
                </div>
                <VStack align="start" justify="between" maxHeight>
                    <StatusTag className={cls.status} text="оплачен" />
                    <div>
                        Ожидаемая дата доставки:
                        <span>28 мая</span>
                    </div>
                </VStack>
            </VStack>
        </div>
    );
});
