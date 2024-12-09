import { memo } from 'react';
import { I_Statistic } from '../../../model/types/statistics';
import { StatisticItem } from '../StatisticsItem/StatisticsItem';
import clsx from 'clsx';
import cls from './MainStatistics.module.scss';

interface MainStatisticsProps {
    className?: string;
}
const statistics: I_Statistic[] = [
    { id: 1, name: 'Выручка', value: 1153632 },
    { id: 2, name: 'Товары', value: 55 },
    { id: 3, name: 'Средний рейтинг', value: 4.4 },
];

export const MainStatistics = memo(({ className }: MainStatisticsProps) => {
    return (
        <div className={clsx(cls.MainStatistics, [className])}>
            {statistics?.length > 0 ? (
                statistics.map((item) => <StatisticItem key={item.id} item={item} />)
            ) : (
                <h2>Статистика не найдена</h2>
            )}
        </div>
    );
});
