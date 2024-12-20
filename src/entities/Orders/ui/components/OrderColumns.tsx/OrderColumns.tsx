'use client';

import { I_CartItem } from '@/entities/Cart/model/types/cart';
import { Button } from '@/shared/ui/Button';
import { Column, ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { ReactElement } from 'react';

export interface I_OrderColumn {
    createdAt: string;
    deliveryDate: string;
    // status: string;
    status: ReactElement;
    total: string;
    items: I_CartItem[];
}

const onSorted = (column: Column<I_OrderColumn, unknown>) => () => {
    return column.toggleSorting(column.getIsSorted() === 'asc');
};

export const orderColumns: ColumnDef<I_OrderColumn>[] = [
    {
        accessorKey: 'createdAt',
        header: ({ column }) => {
            return (
                <Button onClick={onSorted(column)}>
                    Дата оплаты <ArrowUpDown />
                </Button>
            );
        },
    },
    {
        accessorKey: 'deliveryDate',
        header: ({ column }) => {
            return (
                <Button onClick={onSorted(column)}>
                    Дата доставки <ArrowUpDown />
                </Button>
            );
        },
    },
    {
        accessorKey: 'status',
        header: ({ column }) => {
            return (
                <Button onClick={onSorted(column)}>
                    Статус <ArrowUpDown />
                </Button>
            );
        },
        cell: ({ getValue }) => getValue() as React.ReactNode,
        sortingFn: (rowA, rowB) => {
            // Извлечение текста из компонента StatusTag
            const statusA = (rowA.getValue('status') as ReactElement)?.props.text as string;
            const statusB = (rowB.getValue('status') as ReactElement)?.props.text as string;
            // Проводим сравнение
            return statusA.localeCompare(statusB);
        },
    },
    {
        accessorKey: 'total',
        header: ({ column }) => {
            return (
                <Button onClick={onSorted(column)}>
                    Сумма <ArrowUpDown />
                </Button>
            );
        },
    },
];
