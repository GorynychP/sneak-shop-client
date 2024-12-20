import { memo } from 'react';
// Rollup при сборке в реэкспорте через index.ts видит циклическую зависимость(проблема!!!)
import { Orders } from '@/entities/Orders/ui/Orders/Orders';

import { Breadcrumb } from '@/features/Breadcrumbs';
import { Page } from '@/widgets/Page';

const OrdersPage = memo(() => {
    return (
        <Page>
            <Breadcrumb title="Мои заказы" />
            <Orders />
        </Page>
    );
});

export default OrdersPage;
