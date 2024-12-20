import { memo } from 'react';
import { Page } from '@/widgets/Page';
// Rollup при сборке в реэкспорте через index.ts видит циклическую зависимость(проблема!!!)
import { Profile } from '@/entities/Profile/ui/Profile/Profile';

const ProfilePage = memo(() => {
    return (
        <Page>
            <Profile />
        </Page>
    );
});

export default ProfilePage;
