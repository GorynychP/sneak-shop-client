import { Breadcrumb } from '@/features/Breadcrumbs';
import { Page } from '@/widgets/Page';
import { memo } from 'react';
import { TitleCatalog } from '../components/TitleCatalog/TitleCatalog';
import { SortDropdown, SortSize } from '@/features/sort';
import { HStack } from '@/shared/ui/Stack';
import { SneakersList } from '@/widgets/Product/SneakersList';
import { sneakersData } from '@/entities/Product';

const CatalogPagePage = memo(() => {
    const products = sneakersData;
    return (
        <Page className="CatalogPagePage">
            <Breadcrumb />

            <HStack align="center" justify="between">
                <TitleCatalog countProduct={4} />
                <SortDropdown />
            </HStack>

            <HStack justify="between">
                <SortSize />
                <SneakersList products={products} />
            </HStack>
        </Page>
    );
});

export default CatalogPagePage;
