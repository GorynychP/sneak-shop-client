import { memo } from 'react';
import { Page } from '@/widgets/Page';
import { ProfileCard } from '@/entities/Profile';

const ProfilePage = memo(() => {
    return (
        <Page>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ProfileCard />
            </div>
        </Page>
    );
});

export default ProfilePage;
