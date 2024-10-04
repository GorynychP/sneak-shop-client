import { memo } from 'react';
import clsx from 'clsx';
import cls from './Orders.module.scss';
import { OrdersEmpty } from '../components/OrdersEmpty/OrdersEmpty';
import { OrderCard } from '../components/OrderCard/OrderCard';
import { productCartData } from '../../api/productCartData';
import { EnumOrderStatus } from '../../model/types/order';

interface OrdersProps {
    className?: string;
}

export const Orders = memo(({ className }: OrdersProps) => {
    const orders = productCartData;
    const content =
        orders.length !== 0 ? (
            <div className={cls.OrderListCart}>
                {orders.map((order) => (
                    <OrderCard status={EnumOrderStatus.PAYED} order={order} key={order.id} />
                ))}
            </div>
        ) : (
            <OrdersEmpty />
        );

    return (
        <div className={clsx(cls.Orders, [className])}>
            <h3>Мои заказы</h3>
            {content}
        </div>
    );
});
