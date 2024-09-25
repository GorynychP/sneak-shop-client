import { ProductDetails } from '@/entities/Product';
import { Breadcrumb } from '@/features/Breadcrumbs';
import { ButtonFavorites } from '@/features/Product/ButtonFavorites';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { memo } from 'react';

const ProductDetailsPage = memo(() => {
    return (
        <Page className="ProductDetailsPage">
            <VStack gap="32">
                <Breadcrumb />
                <ProductDetails buttonFavorite={<ButtonFavorites />} />
            </VStack>
        </Page>
    );
});
export default ProductDetailsPage;
