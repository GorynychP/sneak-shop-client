import { memo } from 'react';
import { Page } from '@/widgets/Page';
// import { MultSelect } from '@/shared/ui/Popups';

const StatisticsAdminPage = memo(() => {
    return (
        <Page padding="small" className="StatisticsAdminPage">
            <h2>Статистика</h2>
            {/* <MultSelect /> */}
        </Page>
    );
});
export default StatisticsAdminPage;
