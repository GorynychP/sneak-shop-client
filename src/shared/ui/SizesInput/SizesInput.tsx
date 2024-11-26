import { memo, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import cls from './SizesInput.module.scss';
import { Button } from '../Button';

interface SizesInputProps {
    className?: string;
    value: number[] | undefined;
    onChange: (value: number[]) => void;
}

const availableSizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

export const SizesInput = memo(({ className, onChange, value }: SizesInputProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedSizes, setSelectedSizes] = useState<number[]>(value || []);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsDropdownOpen(false);
        }
    };
    useEffect(() => {
        setSelectedSizes(value || []);
    }, [value]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        console.log('монтировании');

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            console.log('размонтировании');
        };
    }, []);

    const toggleSize = (size: number) => {
        if (selectedSizes.includes(size)) {
            setSelectedSizes(selectedSizes.filter((s) => s !== size));
            onChange(selectedSizes.filter((s) => s !== size));
        } else {
            setSelectedSizes([...selectedSizes, size]);
            onChange([...selectedSizes, size]);
        }
    };

    // Открытие/закрытие компонента выбора
    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const handleClickResetOrAll = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.preventDefault();
        if (selectedSizes.length > 0) {
            setSelectedSizes([]);
            onChange([]);
        } else {
            setSelectedSizes(availableSizes);
            onChange(availableSizes);
        }
    };

    return (
        <div ref={dropdownRef} className={clsx(cls.SizesInput, [className])}>
            <div
                onClick={handleDropdownToggle}
                className={clsx(cls.selectedSizes, { [cls.active]: isDropdownOpen })}
            >
                {selectedSizes.length > 0 || isDropdownOpen
                    ? `Размеры: ${selectedSizes.join(', ')}`
                    : 'Нажмите для выбора размеров'}
            </div>

            {/* Выпадающий компонент */}
            {isDropdownOpen && (
                <div className={cls.dropdown}>
                    <h4 className={cls.title}>Выберите размеры:</h4>
                    <Button
                        type="button"
                        className={cls.resetOrAllButton}
                        onClick={handleClickResetOrAll}
                        theme="reset"
                    >
                        {selectedSizes.length > 0 ? 'Сбросить выбор' : 'Выбрать все'}
                    </Button>
                    <div className={cls.sizes}>
                        {availableSizes.map((size) => (
                            <button
                                type="button"
                                key={size}
                                className={clsx(cls.sizeButton, {
                                    [cls.selected]: selectedSizes.includes(size),
                                })}
                                onClick={() => toggleSize(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
});
