import { ADMIN_URL, getRouteProductDetails } from '@/shared/constants/router';
import { Button } from '@/shared/ui/Button';
import { Dropdown } from '@/shared/ui/Popups';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, ExternalLink, MoreHorizontal, Pencil, Trash2 } from 'lucide-react';

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
                direction="center"
                onClick
                trigger={
                    <Button className="size-8 p-0">
                        <MoreHorizontal className="size-4" />
                    </Button>
                }
                items={[
                    {
                        content: (
                            <div className="center gap-min">
                                <ExternalLink /> Страница с продуктом
                            </div>
                        ),
                        href: getRouteProductDetails(row.original.id),
                        key: 1,
                    },
                    {
                        content: (
                            <div className="center gap-min">
                                <Pencil />
                                Редактировать
                            </div>
                        ),
                        href: ADMIN_URL.productEdit(row.original.id),
                        key: 2,
                    },
                    {
                        content: (
                            <div className="center gap-min">
                                <Trash2 />
                                Удалить
                            </div>
                        ),
                        href: 'deleting',
                        key: 3,
                    },
                ]}
            />
        ),
    },
];
