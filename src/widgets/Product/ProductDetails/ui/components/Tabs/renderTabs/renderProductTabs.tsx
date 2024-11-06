import { ElementType, ReactNode } from 'react';
import { Tab, TabPanel } from '@headlessui/react';
import { CustomTab } from '@/shared/ui/Tabs';

export type T_ContentProductTabs =
    | { name: string; type: 'description'; textComponent?: ReactNode; TabAs?: ElementType }
    | { name: string; type: 'comments'; commentsComponent?: ReactNode; count?: number; TabAs?: ElementType }
    | { name: string; type: 'characteristics'; characteristicsComponent?: ReactNode; TabAs?: ElementType };

export const renderProductContent = (content: T_ContentProductTabs) => {
    switch (content.type) {
        case 'description':
            return <TabPanel key={content.name}>{content?.textComponent}</TabPanel>;
        case 'comments':
            return <TabPanel key={content.name}>{content?.commentsComponent}</TabPanel>;
        case 'characteristics':
            return <TabPanel key={content.name}>{content?.characteristicsComponent}</TabPanel>;
        default:
            return null;
    }
};

export const renderProductTabs = (content: T_ContentProductTabs) => {
    switch (content.type) {
        case 'description':
            return (
                <Tab as={content.TabAs || CustomTab} key={content.name}>
                    {content.name}
                </Tab>
            );
        case 'comments':
            return (
                <Tab as={content.TabAs || CustomTab} key={content.name}>
                    {content.name} ({content.count})
                </Tab>
            );
        case 'characteristics':
            return (
                <Tab as={content.TabAs || CustomTab} key={content.name}>
                    {content.name}
                </Tab>
            );
        default:
            return null;
    }
};
