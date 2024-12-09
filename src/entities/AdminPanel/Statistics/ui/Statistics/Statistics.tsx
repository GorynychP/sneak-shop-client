import { memo } from 'react';
import clsx from 'clsx';
import cls from './Statistics.module.scss';
import { MainStatistics } from '../components/MainStatistics/MainStatistics';
import { AreaChart } from '@/shared/ui/Charts';
import { VStack } from '@/shared/ui/Stack';

interface StatisticsProps {
    className?: string;
}

export const Statistics = memo(({ className }: StatisticsProps) => {
    return (
        <div className={clsx(cls.Statistics, [className])}>
            <MainStatistics />
            <VStack className={cls.chart}>
                <h3>Выручка</h3>
                <AreaChart
                    data={[
                        { date: '01.01', value: 10054 },
                        { date: '01.02', value: 54500 },
                        { date: '01.03', value: 200000 },
                        { date: '01.04', value: 156000 },
                        { date: '01.05', value: 45060 },
                        { date: '01.06', value: 28540 },
                    ]}
                />
            </VStack>
        </div>
    );
});
