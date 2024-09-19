import { Breadcrumb } from '@/features/Breadcrumbs';
import { Page } from '@/widgets/Page';
import { memo } from 'react';
import { TitleCatalog } from '../components/TitleCatalog/TitleCatalog';
import { SortDropdown, SortSize } from '@/features/sort';
import { HStack } from '@/shared/ui/Stack';
import { SneakersList } from '@/entities/Sneakers';

const CatalogPagePage = memo(() => {
    return (
        <Page className="CatalogPagePage">
            <Breadcrumb />

            <HStack align="center" justify="between">
                <TitleCatalog countProduct={4} />
                <SortDropdown />
            </HStack>

            <HStack justify="between">
                <SortSize />
                <SneakersList />
            </HStack>
        </Page>
    );
});

export default CatalogPagePage;
