import { useOneProduct } from '@/entities/Product';
import { Breadcrumb } from '@/features/Breadcrumbs';
import { useAddCommentAction } from '@/features/comment';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { PageLoader } from '@/widgets/PageLoader';
import { ProductDetails } from '@/widgets/Product/ProductDetails';
import { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = memo(() => {
    const params = useParams<{ id: string }>();
    const { setProductId } = useAddCommentAction();
    useEffect(() => {
        setProductId(params.id || '');
    });
    const { product, isPending } = useOneProduct({ id: params.id || '' });

    const content = isPending ? (
        <PageLoader />
    ) : !product ? (
        <h2>Продукт не найден</h2>
    ) : (
        <ProductDetails product={product} />
    );

    return (
        <Page className="ProductDetailsPage">
            <VStack gap="32">
                <Breadcrumb productName={product?.title} />
                {content}
            </VStack>
        </Page>
    );
});
export default ProductDetailsPage;
