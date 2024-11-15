import { useQuery } from '@tanstack/react-query';
import { orderService } from '../../services/order.service';

export const useOrders = () => {
    const { data: orders, isLoading } = useQuery({
        queryKey: ['orders'],
        queryFn: () => orderService.getAllForUser(),
    });

    return { orders, isLoading };
};
