import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { SetStateAction } from 'react';
import cls from './CheckboxGroup.module.scss';
import { CheckboxItem } from '../Checkbox/Checkbox';
import clsx from 'clsx';
import { Button } from '../Button';

export interface CheckboxItem<T = string> {
    id: number;
    name: string;
    type: T;
    enabled: boolean;
    disabled?: boolean;
}
interface CheckboxGroupProps {
    className?: string;
    items: CheckboxItem[];
    setItems: (items: SetStateAction<CheckboxItem[]>) => void;
    onClick?: () => void;
}

export function CheckboxGroup(props: CheckboxGroupProps) {
    const { className, items, setItems, onClick } = props;

    const toggleCheckbox = (checkBoxItem: CheckboxItem) => {
        const isAnotherEnabled = items.some((item) => item.enabled && item.id !== checkBoxItem.id);
        if (!isAnotherEnabled) return;
        setItems((prev) => {
            return prev.map((item) => {
                return item.id === checkBoxItem.id ? { ...item, enabled: !item.enabled } : item;
            });
        });
    };
    return (
        <Listbox className={clsx(cls.MyCheckboxGroup, [className])} value={items} as="div" multiple>
            <ListboxButton onClick={onClick} theme="outline" as={Button} className="column">
                {items
                    .filter((item) => item.enabled)
                    .map((item) => (
                        <div key={item.id}>{item.name}</div>
                    ))}
            </ListboxButton>
            <ListboxOptions className={cls.options} as={'ul'} anchor="left start">
                {items.map((item) => (
                    <ListboxOption as={'li'} key={item.id} value={item} className="center gap-min">
                        <CheckboxItem
                            checked={item.enabled}
                            onClick={() => toggleCheckbox(item)}
                            disabled={item.disabled}
                        />
                        <Label className={cls.label}>{item.name}</Label>
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </Listbox>
    );
}
