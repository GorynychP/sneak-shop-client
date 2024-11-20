import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from '@tanstack/react-table';
import clsx from 'clsx';
import cls from './OrderDataTable.module.scss';
import { Fragment, useState } from 'react';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { HStack, VStack } from '@/shared/ui/Stack';
import { OrderCard } from '../OrderCard/OrderCard';
import { I_OrderColumn } from '../OrderColumns.tsx/OrderColumns';
import { AppLink } from '@/shared/ui/AppLink';
import { getRouteProductDetails } from '@/shared/constants/router';

interface OrderDataTableProps<TData, TValue> {
    className?: string;
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    filterKey?: string;
}

export const OrderDataTable = <TData, TValue>({
    className,
    columns,
    data,
    filterKey,
}: OrderDataTableProps<TData, TValue>) => {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [expandedRowId, setExpandedRowId] = useState<string | null>(null);
    const [pagination, setPagination] = useState({
        pageIndex: 0, //initial page index
        pageSize: 10, //default page size
    });
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,

        state: {
            pagination,
            sorting,
            columnFilters,
        },
    });
    // Функция для переключения состояния строки
    const handleRowClick = (rowId: string) => {
        setExpandedRowId((prevRowId) => (prevRowId === rowId ? null : rowId));
    };

    return (
        <div className={clsx(cls.OrderDataTableWrapper, className)}>
            {filterKey && (
                <div>
                    <Input
                        placeholder="Поиск"
                        value={(table.getColumn(filterKey)?.getFilterValue() as string) ?? ''}
                        onChange={(event) => table.getColumn(filterKey)?.setFilterValue(event.target.value)}
                    />
                </div>
            )}
            <table className={cls.OrderTable}>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <Fragment key={row.id}>
                            <tr
                                onClick={() => handleRowClick(row.id)}
                                // key={row.id}
                                data-state={row.getIsSelected() && 'selected'}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                            {expandedRowId === row.id && (
                                <tr className={cls.ExpandedRow}>
                                    <td colSpan={row.getVisibleCells().length}>
                                        <VStack gap="8" className={cls.OrderListCart}>
                                            {(row.original as I_OrderColumn).items.map((order) => (
                                                <AppLink
                                                    key={order.id}
                                                    to={getRouteProductDetails(order.product.id)}
                                                >
                                                    <OrderCard order={order} />
                                                </AppLink>
                                            ))}
                                        </VStack>
                                    </td>
                                </tr>
                            )}
                        </Fragment>
                    ))}
                </tbody>
            </table>
            {table.getPageCount() > 1 && (
                <HStack className={cls.pagination} align="center" gap="16" max justify="center">
                    <Button
                        theme="accent_button"
                        onClick={() => table.firstPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {'<<'} В начало
                    </Button>
                    <Button
                        theme="accent_button"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {'<'} Предыдущая
                    </Button>
                    <Button
                        theme="accent_button"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Следующая {'>'}
                    </Button>
                    <Button
                        theme="accent_button"
                        onClick={() => table.lastPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        В конец {'>>'}
                    </Button>
                </HStack>
            )}
        </div>
    );
};
