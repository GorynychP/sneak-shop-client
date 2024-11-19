import { getRouteProductDetails } from '@/shared/constants/router';
import { Button } from '@/shared/ui/Button';
import { Dropdown } from '@/shared/ui/Popups';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, ExternalLink, MoreHorizontal, Pencil } from 'lucide-react';

export interface I_ProductColumn {
    id: string;
    title: string;
    price: string;
    discount: number;
    rating: number;
    // category: string;
    // color: string;
    // storeId: string;
}

export const productColumns: ColumnDef<I_ProductColumn>[] = [
    {
        accessorKey: 'title',
        header: ({ column }) => {
            return (
                <Button onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Название
                    <ArrowUpDown />
                </Button>
            );
        },
    },
    {
        accessorKey: 'price',
        header: ({ column }) => {
            return (
                <Button onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Цена
                    <ArrowUpDown />
                </Button>
            );
        },
    },
    {
        accessorKey: 'discount',
        header: ({ column }) => {
            return (
                <Button onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Скидка
                    <ArrowUpDown />
                </Button>
            );
        },
    },
    {
        accessorKey: 'rating',
        header: ({ column }) => {
            return (
                <Button onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Рейтинг
                    <ArrowUpDown />
                </Button>
            );
        },
    },
    // {
    //     accessorKey: 'color',
    //     header: ({ column }) => {
    //         return (
    //             <Button onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
    //                 Цвет
    //                 <ArrowUpDown />
    //             </Button>
    //         );
    //     },
    //     cell: ({ row }) => (
    //         <div className="flex items-center gap-x-3">
    //             {row.original.color}
    //             <div
    //                 className="size-5 rounded-full border"
    //                 style={{
    //                     backgroundColor: row.original.color,
    //                 }}
    //             />
    //         </div>
    //     ),
    // },
    {
        accessorKey: 'actions',
        header: 'Действия',
        cell: ({ row }) => (
            <Dropdown
                onClick
                trigger={
                    <Button className="size-8 p-0">
                        <MoreHorizontal className="size-4" />
                    </Button>
                }
                items={[
                    {
                        content: 'Страница с продуктом',
                        href: getRouteProductDetails(row.original.id),
                        key: 1,
                    },
                    {
                        content: 'Редактировать',
                        href: 'editing',
                        key: 2,
                    },
                    {
                        content: 'Удалить',
                        href: 'deleting',
                        key: 3,
                    },
                ]}
            />
        ),
    },
];
