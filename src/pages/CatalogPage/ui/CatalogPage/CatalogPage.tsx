import { Breadcrumb } from '@/features/Breadcrumbs';
import { Page } from '@/widgets/Page';
import { memo, useCallback, useEffect } from 'react';
import { TitleCatalog } from '../components/TitleCatalog/TitleCatalog';
import {
    filterActions,
    I_FiltersProduct,
    selectorFiltersProducts,
    SortDropdown,
    SortSize,
} from '@/features/sort';
import { HStack } from '@/shared/ui/Stack';
import { SneakersList } from '@/widgets/Product/SneakersList';
import { useManageProductsQuery } from '@/entities/Product/lib/hooks/useManageProductsQuery';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import { stringifyFilter } from '@/shared/lib/utils/format/stringifyFormat';
import { getRouteCatalog, getRouteForMen, getRouteSale } from '@/shared/constants/router';

const CatalogPagePage = memo(() => {
    const [searchParams, setSearchParams] = useSearchParams();
    const filtersProducts = useAppSelector(selectorFiltersProducts);

    const location = useLocation();
    const dispatch = useAppDispatch();

    const { products, isPending, isError, totalCount } = useManageProductsQuery();

    const toStringFormat = stringifyFilter<I_FiltersProduct>(filtersProducts);

    useEffect(() => {
        if (location.pathname === getRouteSale()) {
            dispatch(filterActions.resetAndSetFilters({ isSale: true }));
        } else {
            dispatch(
                filterActions.resetAndSetFilters({
                    gender:
                        location.pathname === getRouteCatalog()
                            ? undefined
                            : location.pathname === getRouteForMen()
                            ? 'MALE'
                            : 'FEMALE',
                }),
            );
        }
    }, [location.pathname, dispatch]);

    useEffect(() => {
        setSearchParams(toStringFormat);
    }, [filtersProducts, searchParams, setSearchParams]);

    const handleFilterChange = useCallback(
        (newFilters: I_FiltersProduct) => {
            dispatch(filterActions.setFilters(newFilters));
            dispatch(filterActions.setFilters({ page: 1 }));
        },
        [dispatch],
    );

    const productsLength = products?.length;

    return (
        <Page className="CatalogPagePage">
            <Breadcrumb />
            <HStack align="center" justify="between">
                <TitleCatalog countProduct={productsLength} />
                <SortDropdown onChange={handleFilterChange} />
            </HStack>

            <HStack justify="between">
                <SortSize filterProducts={filtersProducts} />
                <SneakersList
                    isLoading={isPending}
                    isError={isError}
                    products={products}
                    totalCount={totalCount}
                />
            </HStack>
        </Page>
    );
});

export default CatalogPagePage;
