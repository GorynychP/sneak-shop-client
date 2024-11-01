import { memo, useEffect, useState } from 'react';
import clsx from 'clsx';
import cls from './SortSize.module.scss';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { HStack, VStack } from '@/shared/ui/Stack';
import { I_FiltersProduct } from '@/features/sort/model/types/filterProduct';
import { useAppDispatch } from '@/shared/model';
import { filterActions } from '@/features/sort/model/slice/filtersProductsSlice';
import { useLocation } from 'react-router-dom';

interface SortSizeProps {
    className?: string;
    filterProducts: I_FiltersProduct;
}
type RangeValues = number | number[];

const sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
const MIN = 2000;
const MAX = 20000;

export const SortSize = memo(({ className, filterProducts }: SortSizeProps) => {
    const location = useLocation();
    const [price, setPrice] = useState<RangeValues>([MIN, MAX]);
    const [sizeSearch, setSizeSearch] = useState<number[]>([]);
    useEffect(() => {
        setSizeSearch([]);
        setPrice([MIN, MAX]);
    }, [location.pathname]);
    const dispatch = useAppDispatch();
    const handleRangeChange = (values: RangeValues) => {
        setPrice(values);
    };
    const handleSizeSearch = (size: number) => {
        if (sizeSearch.includes(size)) {
            setSizeSearch((prev) => prev.filter((item) => item !== size));
            return;
        }
        setSizeSearch((prev) => [...prev, size]);
    };
    const handleApply = () => {
        const sizeArray = sizeSearch.length === 0 ? undefined : sizeSearch;
        if (Array.isArray(price))
            dispatch(
                filterActions.setFilters({
                    priceFrom: price[0],
                    priceTo: price[1],
                    sizes: sizeArray,
                }),
            );
    };
    const handleReset = () => {
        setPrice([MIN, MAX]);
        setSizeSearch([]);
        dispatch(filterActions.resetAndSetFilters({ gender: filterProducts.gender }));
    };
    return (
        <div className={clsx(cls.SortSize, [className])}>
            <VStack gap="20" className={cls.sizes}>
                <p className={cls.title}>Размер:</p>
                <div className={cls.sizesNum}>
                    {sizes.map((num) => (
                        <button
                            className={clsx({ [cls.btnActive]: sizeSearch.includes(num) })}
                            onClick={() => handleSizeSearch(num)}
                            key={num}
                        >
                            {num}
                        </button>
                    ))}
                </div>
            </VStack>

            <div className={cls.priceBlock}>
                <p className={cls.title}>Стоимость:</p>
                <HStack align="center" gap="4" justify="center">
                    <p className={cls.price}>от: {Array.isArray(price) && price[0]} $.</p>
                    <p className={cls.price}>до: {Array.isArray(price) && price[1]} $.</p>
                </HStack>

                <VStack align="center" gap="20">
                    <Slider
                        range
                        className={cls.slider}
                        value={price}
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
