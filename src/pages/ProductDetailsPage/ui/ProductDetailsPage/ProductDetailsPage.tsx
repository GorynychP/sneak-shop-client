import { SneakersDetails } from '@/entities/Sneakers';
import { Breadcrumb } from '@/features/Breadcrumbs';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { memo } from 'react';

const ProductDetailsPage = memo(() => {
    return (
        <Page className="ProductDetailsPage">
            <VStack gap="32">
                <Breadcrumb />
                <SneakersDetails />
            </VStack>
        </Page>
    );
});
export default ProductDetailsPage;
