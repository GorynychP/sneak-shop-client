import { memo, useState } from 'react';
import clsx from 'clsx';
import cls from './SortSize.module.scss';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { HStack, VStack } from '@/shared/ui/Stack';
interface SortSizeProps {
    className?: string;
}
type RangeValues = number | number[];

const sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
const MIN = 2000;
const MAX = 20000;

export const SortSize = memo(({ className }: SortSizeProps) => {
    const [values, setValues] = useState<RangeValues>([MIN, MAX]);

    const handleRangeChange = (values: RangeValues) => {
        setValues(values);
    };
    return (
        <div className={clsx(cls.SortSize, [className])}>
            <VStack gap="20" className={cls.sizes}>
                <p className={cls.title}>Размер:</p>
                <div className={cls.sizesNum}>
                    {sizes.map((num) => (
                        <button key={num}>{num}</button>
                    ))}
                </div>
            </VStack>

            <div className={cls.priceBlock}>
                <p className={cls.title}>Стоимость:</p>
                <HStack align="center" gap="4" justify="center">
                    <p className={cls.price}>от: {Array.isArray(values) && values[0]} $.</p>
                    <p className={cls.price}>до: {Array.isArray(values) && values[1]} $.</p>
                </HStack>

                <VStack align="center" gap="20">
                    <Slider
                        range
                        className={cls.slider}
                        value={values}
                        onChange={handleRangeChange}
                        min={MIN}
                        max={MAX}
                        step={100}
                    />

                    <HStack align="center" gap="20">
                        <button>Сбросить</button>
                        <button>Приметить</button>
                    </HStack>
                </VStack>
            </div>
        </div>
    );
});
