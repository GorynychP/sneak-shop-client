import { Breadcrumb } from '@/features/Breadcrumbs';
import { memo } from 'react';

const CatalogPagePage = memo(() => {
    return (
        <div className="CatalogPagePage">
            <Breadcrumb />
        </div>
    );
});

export default CatalogPagePage;
