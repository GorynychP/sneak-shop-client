import { TableAllComments, useGetComments } from '@/entities/AdminPanel/CommentAdmin';
import { Page } from '@/widgets/Page';
import { PageLoader } from '@/widgets/PageLoader';
import { memo } from 'react';

const ReviewAdminPage = memo(() => {
    const { comments, isLoading, isError } = useGetComments();

    if (isLoading) return <PageLoader />;
    if (isError) return <p>Something went wrong</p>;
    if (!comments) return null;

    return (
        <Page padding="small" className="ReviewAdminPage">
            <h2>Отзывы</h2>
            <TableAllComments comments={comments} />
        </Page>
    );
});

export default ReviewAdminPage;
