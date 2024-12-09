import {
    Area,
    AreaChart,
    CartesianGrid,
    DefaultTooltipContent,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import clsx from 'clsx';
import cls from './AreaChart.module.scss';
import { formatUSD } from '@/shared/lib/utils/format/currency';

export interface I_MonthlySales {
    date: string;
    value: number;
}
interface AreaChartProps {
    className?: string;
    data: I_MonthlySales[];
}
export default {
    component: AreaChart,
    docs: {
        autodocs: false,
    },
};

export const AreaChartComponent = ({ className, data }: AreaChartProps) => {
    return (
        <div className={clsx(cls.AreaChart, [className])}>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    // width={650}
                    // height={400}
                    accessibilityLayer
                    data={data}
                    margin={{
                        left: 50,
                        // right: 20,
                    }}
                >
                    {/* <CartesianGrid vertical={false} /> */}
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tickLine={true} axisLine={true} tickMargin={8} />
                    <YAxis format={0} tickFormatter={formatUSD} tickMargin={8} />
                    <Tooltip content={<DefaultTooltipContent formatter={formatUSD} />} />
                    <Area
                        dataKey="value"
                        type="monotone"
                        fill="var(--text-accent)"
                        stroke="var(--text-accent)"
                        strokeWidth={2}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};
