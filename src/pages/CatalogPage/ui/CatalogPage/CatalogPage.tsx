import { Breadcrumb } from '@/features/Breadcrumbs';
import { Page } from '@/widgets/Page';
import { memo } from 'react';
import { TitleCatalog } from '../components/TitleCatalog/TitleCatalog';
import { SortDropdown } from '@/features/sort';

const CatalogPagePage = memo(() => {
    return (
        <Page className="CatalogPagePage">
            <Breadcrumb />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <TitleCatalog countProduct={4} />
                <SortDropdown />
            </div>
        </Page>
    );
});

export default CatalogPagePage;
