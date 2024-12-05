import { ADMIN_URL, getRouteProductDetails } from '@/shared/constants/router';
import { Button } from '@/shared/ui/Button';
import { Dropdown } from '@/shared/ui/Popups';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, ExternalLink, MoreHorizontal, Pencil } from 'lucide-react';
import { DeleteAction } from './DeleteAction';

export interface I_ProductColumn {
    id: string;
    title: string;
    price: string;
    discount: number;
    rating: number;
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
    {
        accessorKey: 'actions',
        header: 'Действия',
        cell: ({ row }) => (
            <Dropdown
                direction="bottom left"
                isClick
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
                        target: '_blank',
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
                        content: <DeleteAction id={row.original.id} />,
                        key: 3,
                    },
                ]}
            />
        ),
    },
];
