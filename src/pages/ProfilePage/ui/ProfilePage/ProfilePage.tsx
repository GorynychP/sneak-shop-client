import { memo } from 'react';
import { Page } from '@/widgets/Page';
import { Profile } from '@/entities/Profile';

const ProfilePage = memo(() => {
    return (
        <Page>
            <Profile />
        </Page>
    );
});

export default ProfilePage;
