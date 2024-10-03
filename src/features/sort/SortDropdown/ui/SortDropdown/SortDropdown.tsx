import { memo, useState } from 'react';
import clsx from 'clsx';
import cls from './SortDropdown.module.scss';
import { ListBox } from '@/shared/ui/Popups';
import { getSortItems } from '../../model/selectors/getSortItems';
import ArrowIcon from '@/shared/assets/icon/arrow.svg?react';
interface SortDropdownProps {
    className?: string;
}

export const SortDropdown = memo(({ className }: SortDropdownProps) => {
    const [click, setClick] = useState(false);
    const [value, setValue] = useState('');
    const items = getSortItems();
    const onClickButton = () => {
        setClick(!click);
    };
    return (
        <div className={clsx(cls.SortDropdown, [className])}>
            <ListBox
                defaultValue="Сортировать"
                value={value}
                items={items}
                onChange={(value) => setValue(value)}
                direction="bottom left"
                addonRight={<ArrowIcon className={click ? cls.arrowDown : cls.arrowUp} />}
                onClick={onClickButton}
            />
        </div>
    );
});
