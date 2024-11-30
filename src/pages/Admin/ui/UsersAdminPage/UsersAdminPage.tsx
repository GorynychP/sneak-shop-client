import { memo } from 'react';
import clsx from 'clsx';
import cls from './UsersAdminPage.module.scss';
import { Page } from '@/widgets/Page';
import { TableAllUsers, useUsers } from '@/entities/AdminPanel/UsersAdmin';
import { PageLoader } from '@/widgets/PageLoader';

const UsersAdminPage = memo(() => {
    const { users, isLoading, isError } = useUsers();

    if (isLoading) return <PageLoader />;
    if (isError) return <p>Something went wrong</p>;
    if (!users) return null;

    return (
        <Page padding="small" className={clsx(cls.UsersAdminPage)}>
            <h2>Все пользователи</h2>
            <TableAllUsers users={users} />
        </Page>
    );
});

export default UsersAdminPage;
