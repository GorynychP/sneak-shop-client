import { Breadcrumb } from '@/features/Breadcrumbs';
import { memo } from 'react';

const ProductDetailsPage = memo(() => {
    return (
        <div className="ProductDetailsPage">
            <Breadcrumb />
            <h1>ProductDetailsPage</h1>
        </div>
    );
});
export default ProductDetailsPage;
