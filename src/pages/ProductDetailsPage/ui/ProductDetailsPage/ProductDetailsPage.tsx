import { I_Product, ProductDetails, productService } from '@/entities/Product';
import { Breadcrumb } from '@/features/Breadcrumbs';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { useQuery } from '@tanstack/react-query';
import { memo } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = memo(() => {
    const params = useParams<{ id: string }>();
    const { data, isPending, isError } = useQuery<I_Product>({
        queryKey: ['product', params.id],
        queryFn: () => productService.getById(params.id),

        // retry: false,
    });

    return (
        <Page className="ProductDetailsPage">
            <VStack gap="32">
                <Breadcrumb />
                {!data ? <h2>Продукт не найден</h2> : <ProductDetails product={data} />}
            </VStack>
        </Page>
    );
});
export default ProductDetailsPage;
