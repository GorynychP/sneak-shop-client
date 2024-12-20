import { memo } from 'react';

import { Page } from '@/widgets/Page';
import { Breadcrumb } from '@/features/Breadcrumbs';
import { Cart } from '@/entities/Cart/ui/Cart/Cart';

const CartPage = memo(() => {
    return (
        <Page className="CartPage">
            <Breadcrumb title="Корзина" />
            <Cart />
        </Page>
    );
});

export default CartPage;
