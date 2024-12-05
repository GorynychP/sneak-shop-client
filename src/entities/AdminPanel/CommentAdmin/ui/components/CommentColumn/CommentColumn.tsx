import { I_User } from '@/entities/User';
import { getRouteProductDetails } from '@/shared/constants/router';
import { Button } from '@/shared/ui/Button';
import { Dropdown } from '@/shared/ui/Popups';
import { StarRating } from '@/shared/ui/StarRating';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, ExternalLink, MoreHorizontal } from 'lucide-react';
import { DeleteActionComment } from './DeleteAction';

export interface I_CommentColumn {
    id: string;
    text: string;
    rating?: number;
    createdAt: string;
    updatedAt?: string;
    user?: I_User;
    userId?: string;
    productId: string;
}

export const commentColumns: ColumnDef<I_CommentColumn>[] = [
    {
        accessorKey: 'user',
        header: ({ column }) => {
            return (
                <Button onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Пользователь
                    <ArrowUpDown />
                </Button>
            );
        },
        cell: ({ row }) => {
            const user = row.original.user;
            return user ? user.email : 'Нет данных';
        },
        filterFn: (row, columnId, filterValue) => {
            const user = row.getValue<I_User>(columnId);
            return user?.email?.toLowerCase().includes(filterValue.toLowerCase());
        },
    },
    {
        accessorKey: 'createdAt',
        header: ({ column }) => {
            return (
                <Button onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Дата создания
                    <ArrowUpDown />
                </Button>
            );
        },
    },
    {
        accessorKey: 'text',
        header: ({ column }) => {
            return (
                <Button onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Комментарий
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

        cell: ({ row }) => {
            const rating = row.original.rating;
            return <StarRating selectedStars={rating} fixed />;
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
                        href: getRouteProductDetails(row.original.productId),
                        target: '_blank',
                        key: 1,
                    },
                    // {
                    //     content: (
                    //         <div className="center gap-min">
                    //             <Pencil />
                    //             Редактировать
                    //         </div>
                    //     ),
                    //     href: ADMIN_URL.productEdit(row.original.id),
                    //     key: 2,
                    // },
                    {
                        content: <DeleteActionComment id={row.original.id} />,
                        key: 3,
                    },
                ]}
            />
        ),
    },
];
