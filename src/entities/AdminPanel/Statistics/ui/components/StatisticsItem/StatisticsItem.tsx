import { memo } from 'react';
import clsx from 'clsx';
import cls from './StatisticsItem.module.scss';
import { I_Statistic } from '../../../model/types/statistics';
import { getIcon } from '../../../model/utils/statisctics.util';
import CountUp from 'react-countup';
import { formatUSD } from '@/shared/lib/utils/format/currency';

interface StatisticsItemProps {
    className?: string;
    item: I_Statistic;
}

export const StatisticItem = memo(({ className, item }: StatisticsItemProps) => {
    const Icon = getIcon(item.id);
    return (
        <div className={clsx(cls.StatisticsItem, [className])}>
            <div className={cls.header}>
                <h4 className={cls.title}>{item.name}</h4>
                <Icon className={cls.icon} />
            </div>
            <div className={cls.content}>
                <h3 className={cls.value}>
                    {item.id === 1 ? (
                        <CountUp end={item.value} formattingFn={formatUSD} />
                    ) : item.id === 3 ? (
                        <CountUp end={item.value} decimals={1} />
                    ) : (
                        <CountUp end={item.value} />
                    )}
                </h3>
            </div>
        </div>
    );
});
