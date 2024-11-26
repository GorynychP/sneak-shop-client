import { ElementType, ReactNode, useState } from 'react';
import { Tab, TabGroup, TabList, TabPanels } from '@headlessui/react';
import clsx from 'clsx';
import cls from './Tabs.module.scss';
import { CustomTab } from './Tab/CustomTab';
import { HStack } from '../../Stack';

export type T_ContentCategories = { name: string; TabAs?: ElementType; count?: number };

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
}: // renderTabs,
TabsProps<T>) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const content = categories?.map(renderContent);
    // const tabs = categories?.map(renderTabs);

    return (
        <div className={clsx(cls.Tabs, [className])}>
            <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                <TabList className={cls.tabs} as="aside">
                    {/* {tabs} */}
                    {categories?.map((content) => (
                        <Tab
                            className={clsx(cls.tab, {
                                [cls.activeTab]: selectedIndex === categories.indexOf(content),
                            })}
                            as={content?.TabAs || CustomTab}
                            key={content.name}
                        >
                            <HStack align="center" gap="8">
                                <span>{content?.name}</span>
                                {typeof content?.count === 'number' && <span>{`(${content.count})`}</span>}
                            </HStack>
                        </Tab>
                    ))}
                </TabList>
                <TabPanels>{content}</TabPanels>
            </TabGroup>
        </div>
    );
};
