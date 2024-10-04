import { Orders } from '@/entities/Orders';
import { Breadcrumb } from '@/features/Breadcrumbs';
import { Page } from '@/widgets/Page';
import { memo } from 'react';

const OrdersPage = memo(() => {
    return (
        <Page>
            <Breadcrumb title="Мои заказы" />
            <Orders />
        </Page>
    );
});

export default OrdersPage;
