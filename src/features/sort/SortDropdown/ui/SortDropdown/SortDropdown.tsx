import { memo, useState } from 'react';
import clsx from 'clsx';
import cls from './SortDropdown.module.scss';
import { ListBox } from '@/shared/ui/Popups';
import { getSortItems } from '../../model/selectors/getSortItems';
import ArrowIcon from '@/shared/assets/icon/arrow.svg?react';
import { I_FiltersProduct } from '@/features/sort/model/types/filterProduct';
interface SortDropdownProps {
    className?: string;
    onChange: (value: I_FiltersProduct) => void;
}

export const SortDropdown = memo(({ className, onChange }: SortDropdownProps) => {
    const [click, setClick] = useState(false);
    const [value, setValue] = useState('');
    const items = getSortItems();

    const onClickButton = () => {
        setClick(!click);
    };
    const onChangeSort = (value: string) => {
        if (value === 'Сортировать') {
            return;
        } else if (value === 'Сначала дорогие') {
            setValue(value);
            onChange({ sortBy: 'price', sortOrder: 'desc' });
        } else if (value === 'Сначала дешевые') {
            setValue(value);
            onChange({ sortBy: 'price', sortOrder: 'asc' });
        } else if (value === 'Сначала новые') {
            setValue(value);
            onChange({ sortBy: 'createdAt', sortOrder: 'desc' });
        } else if (value === 'Сначала старые') {
            setValue(value);
            onChange({ sortBy: 'createdAt', sortOrder: 'asc' });
        }
    };
    return (
        <div className={clsx(cls.SortDropdown, [className])}>
            <ListBox
                defaultValue="Сортировать"
                value={value}
                items={items}
                onChange={onChangeSort}
                direction="bottom left"
                addonRight={<ArrowIcon className={click ? cls.arrowDown : cls.arrowUp} />}
                onClick={onClickButton}
            />
        </div>
    );
});
