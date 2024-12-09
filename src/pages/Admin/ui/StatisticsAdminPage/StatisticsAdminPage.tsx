import { memo } from 'react';
import { Page } from '@/widgets/Page';
import { Statistics } from '@/entities/AdminPanel/Statistics';

const StatisticsAdminPage = memo(() => {
    return (
        <Page padding="small" className="StatisticsAdminPage">
            <h2>Статистика</h2>
            <Statistics />
        </Page>
    );
});
export default StatisticsAdminPage;
