import { memo } from 'react';
import clsx from 'clsx';
import cls from './UsersAdminPage.module.scss';
import { Page } from '@/widgets/Page';

const UsersAdminPage = memo(() => {
    return (
        <Page padding="small" className={clsx(cls.UsersAdminPage)}>
            <h2>Все пользователи</h2>
        </Page>
    );
});

export default UsersAdminPage;
