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
import cls from './DataTable.module.scss';
import { Fragment, useState } from 'react';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from 'lucide-react';

interface DataTableProps<TData, TValue> {
    className?: string;
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    filterKey?: string;
}

export const DataTable = <TData, TValue>({
    className,
    columns,
    data,
    filterKey,
}: DataTableProps<TData, TValue>) => {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
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

    return (
        <div className={clsx(cls.DataTableWrapper, className)}>
            {filterKey && (
                <div className="flex">
                    <Input
                        placeholder="Поиск"
                        value={(table.getColumn(filterKey)?.getFilterValue() as string) ?? ''}
                        onChange={(event) => table.getColumn(filterKey)?.setFilterValue(event.target.value)}
                    />
                </div>
            )}
            <table className={cls.Table}>
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
                            <tr key={row.id} data-state={row.getIsSelected() && 'selected'}>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        </Fragment>
                    ))}
                </tbody>
            </table>
            {table.getPageCount() > 1 && (
                <HStack className={cls.pagination} align="center" gap="16" max justify="center">
                    <span>
                        Страниц {table.getState().pagination.pageIndex + 1} из {table.getPageCount()}
                    </span>
                    <Button
                        theme="accent_button"
                        onClick={() => table.firstPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <ChevronFirst />
                    </Button>
                    <Button
                        theme="accent_button"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <ChevronLeft />
                    </Button>
                    <Button
                        theme="accent_button"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        <ChevronRight />
                    </Button>
                    <Button
                        theme="accent_button"
                        onClick={() => table.lastPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        <ChevronLast />
                    </Button>
                </HStack>
            )}
        </div>
    );
};
