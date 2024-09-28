import { ProductDetails, sneakersData } from '@/entities/Product';
import { Breadcrumb } from '@/features/Breadcrumbs';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { memo } from 'react';

const ProductDetailsPage = memo(() => {
    return (
        <Page className="ProductDetailsPage">
            <VStack gap="32">
                <Breadcrumb />
                <ProductDetails product={sneakersData[0]} />
            </VStack>
        </Page>
    );
});
export default ProductDetailsPage;
