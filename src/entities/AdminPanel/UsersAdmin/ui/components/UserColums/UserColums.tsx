import { Button } from '@/shared/ui/Button';
import { UserRole } from '@/entities/User/model/types/user';
import { Dropdown } from '@/shared/ui/Popups';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal, Pencil } from 'lucide-react';
import { DeleteAction } from './DeleteAction';
import { ChangeRole } from './ChangeRole';

export interface I_UserColumn {
    id: string;
    name: string;
    email: string;
    avatarPath: string;
    rights: UserRole[];
}

export const userColumns: ColumnDef<I_UserColumn>[] = [
    {
        accessorKey: 'email',
        header: ({ column }) => {
            return (
                <Button onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Емейл
                    <ArrowUpDown />
                </Button>
            );
        },
    },
    {
        accessorKey: 'name',
        header: ({ column }) => {
            return (
                <Button onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Имя
                    <ArrowUpDown />
                </Button>
            );
        },
    },
    {
        accessorKey: 'rights',
        header: ({ column }) => {
            return (
                <Button onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Роль
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
                onClick
                trigger={
                    <Button className="size-8 p-0">
                        <MoreHorizontal className="size-4" />
                    </Button>
                }
                items={[
                    {
                        content: <ChangeRole />,
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
