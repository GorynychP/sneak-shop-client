import { I_Product } from '@/entities/Product';
import { useManageProductsQuery } from '@/entities/Product/lib/hooks/useManageProductsQuery';
import { getRouteForMen, getRouteForWomen, getRouteSale } from '@/shared/constants/router';
import { SneakersList } from '@/widgets/Product/SneakersList';
import { useLocation } from 'react-router-dom';

export const useGetFilterProducts = () => {
    const location = useLocation();
    const { products, isPending, isError } = useManageProductsQuery();

    const getFilteredProducts = (products: I_Product[]) => {
        const routesMap = {
            [getRouteForMen()]: (product: I_Product) => product.gender === 'MALE',
            [getRouteForWomen()]: (product: I_Product) => product.gender === 'FEMALE',
            [getRouteSale()]: (product: I_Product) => product.discount > 0,
        };

        const filterFunction = routesMap[location.pathname] || (() => true);
        return products.filter(filterFunction);
    };

    const sneakersData = products ? getFilteredProducts(products) : [];
    const ProductContent = () => {
        if (isPending) return <div>Loading...</div>;
        if (isError) return <div>Error</div>;

        return <SneakersList products={sneakersData} />;
    };

    return { ProductContent, sneakersData };
};
