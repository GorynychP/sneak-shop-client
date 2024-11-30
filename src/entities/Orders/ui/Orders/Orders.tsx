import { memo } from 'react';
import clsx from 'clsx';
import cls from './Orders.module.scss';
import { OrdersEmpty } from '../components/OrdersEmpty/OrdersEmpty';
// import { OrderCard } from '../components/OrderCard/OrderCard';
import { EnumOrderStatus } from '../../model/types/order';
import { useOrders } from '../../api/hooks/useOrders';
import { PageLoader } from '@/widgets/PageLoader';
import { formatData } from '@/shared/lib/utils/format/formatData';
import { formatUSD } from '@/shared/lib/utils/format/currency';
import { I_OrderColumn, orderColumns } from '../components/OrderColumns.tsx/OrderColumns';
import { OrderDataTable } from '../components/OrderDataTable/OrderDataTable';
import { StatusTag } from '@/shared/ui/StatusTag';
import { Clock } from 'lucide-react';

interface OrdersProps {
    className?: string;
}

export const Orders = memo(({ className }: OrdersProps) => {
    const { orders, isLoading } = useOrders();

    if (isLoading) return <PageLoader />;
    if (!orders) return null;
    if (orders.length === 0) return <OrdersEmpty />;

    const formattedOrders: I_OrderColumn[] = orders.map((order) => ({
        createdAt: formatData(order.createdAt),
        status:
            order.status === EnumOrderStatus.PENDING ? (
                <StatusTag
                    imageComponent={<Clock style={{ width: '18px' }} />}
                    isCompleted={false}
                    text="В ожидании"
                />
            ) : (
                <StatusTag text="Оплачен" />
            ),
        total: formatUSD(order.total),
        deliveryDate: formatData(order.createdAt),
        items: order.items,
    }));

    // let content;

    // if (isLoading) {
    //     content = <PageLoader />;
    // } else if (!orders || orders.length === 0) {
    //     content = <OrdersEmpty />;
    // } else {
    //     content = (
    //         <div className={cls.OrderListCart}>
    //             {orders.map((order) => (
    //                 <OrderCard status={EnumOrderStatus.PAYED} order={order} key={order.id} />
    //             ))}
    //         </div>
    //     );
    // }

    return (
        <div className={clsx(cls.Orders, [className])}>
            <h3>Мои заказы</h3>
            {/* {content} */}
            <OrderDataTable className={cls.OrderDataTable} columns={orderColumns} data={formattedOrders} />
        </div>
    );
});
