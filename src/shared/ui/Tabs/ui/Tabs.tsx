import { ReactNode, useState } from 'react';
import { TabGroup, TabList, TabPanels } from '@headlessui/react';
import clsx from 'clsx';
import cls from './Tabs.module.scss';

export type T_ContentCategories = { name: string };

interface TabsProps<T> {
    className?: string;
    categories: T[];
    renderContent: (content: T) => ReactNode;
    renderTabs: (content: T) => ReactNode;
}

export const Tabs = <T extends T_ContentCategories>({
    className,
    categories,
    renderContent,
    renderTabs,
}: TabsProps<T>) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const content = categories?.map(renderContent);
    const tabs = categories?.map(renderTabs);
    console.log('selectedIndex', selectedIndex);
    return (
        <div className={clsx(cls.Tabs, [className])}>
            <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                <TabList className={cls.tabs} as="aside">
                    {tabs}
                </TabList>
                <TabPanels>{content}</TabPanels>
            </TabGroup>
        </div>
    );
};
