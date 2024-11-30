import { memo } from 'react';
import clsx from 'clsx';
import cls from './TableAllUsers.module.scss';
import { I_UserColumn, userColumns } from '../components/UserColums/UserColums';
import { DataTable } from '@/shared/ui/DataTable/DataTable';
import { I_User } from '@/entities/User/model/types/user';

interface TableAllUsersProps {
    className?: string;
    users: I_User[];
}

export const TableAllUsers = memo(({ className, users }: TableAllUsersProps) => {
    const formattedUsers: I_UserColumn[] = users
        ? users.map((user) => ({
              id: user.id,
              name: user.name,
              email: user.email,
              avatarPath: user.avatarPath,
              rights: user.rights,
          }))
        : [];

    return (
        <div className={clsx(cls.TableAllUsers, [className])}>
            <DataTable columns={userColumns} data={formattedUsers} filterKey="email" />
        </div>
    );
});
