import { Breadcrumb } from '@/features/Breadcrumbs';
import { Page } from '@/widgets/Page';
import { memo } from 'react';

const ProductDetailsPage = memo(() => {
    return (
        <Page className="ProductDetailsPage">
            <Breadcrumb />
            <h1>ProductDetailsPage</h1>
        </Page>
    );
});
export default ProductDetailsPage;
