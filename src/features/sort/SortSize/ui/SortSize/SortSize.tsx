import { memo, useState } from 'react';
import clsx from 'clsx';
import cls from './SortSize.module.scss';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { HStack, VStack } from '@/shared/ui/Stack';
import { I_FiltersProduct } from '@/features/sort/model/types/filterProduct';
import { useAppDispatch } from '@/shared/model';
import { filterActions } from '@/features/sort/model/slice/filtersProductsSlice';
interface SortSizeProps {
    className?: string;
    filterProducts: I_FiltersProduct;
}
type RangeValues = number | number[];

const sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
const MIN = 2000;
const MAX = 20000;

export const SortSize = memo(({ className, filterProducts }: SortSizeProps) => {
    const [values, setValues] = useState<RangeValues>([MIN, MAX]);
    const dispatch = useAppDispatch();
    const handleRangeChange = (values: RangeValues) => {
        setValues(values);
    };
    const handleApply = () => {
        if (Array.isArray(values))
            dispatch(filterActions.setFilters({ priceFrom: values[0], priceTo: values[1] }));
    };
    const handleReset = () => {
        setValues([MIN, MAX]);
        dispatch(filterActions.resetAndSetFilters({ gender: filterProducts.gender }));
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
                        <button onClick={handleReset}>Сбросить</button>
                        <button onClick={handleApply}>Приметить</button>
                    </HStack>
                </VStack>
            </div>
        </div>
    );
});
