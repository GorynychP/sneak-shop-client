import { memo } from 'react';
import clsx from 'clsx';
import cls from './ProductsTable.module.scss';
import { I_Product } from '../../model/types/product';
import { I_ProductColumn, productColumns } from '../components/ProductColumns/ProductColumns';
import { formatUSD } from '@/shared/lib/utils/format/currency';
import { DataTable } from '@/shared/ui/DataTable/DataTable';

interface ProductsTableProps {
    className?: string;
    products: I_Product[];
}

export const ProductsTable = memo(({ className, products }: ProductsTableProps) => {
    const formattedProducts: I_ProductColumn[] = products
        ? products.map((product) => ({
              id: product.id,
              title: product.title,
              price: formatUSD(product.price),
              discount: product.discount,
              rating: product.rating,
          }))
        : [];

    return (
        <div className={clsx(cls.ProductsTable, [className])}>
            <DataTable filterKey="title" columns={productColumns} data={formattedProducts} />
        </div>
    );
});
