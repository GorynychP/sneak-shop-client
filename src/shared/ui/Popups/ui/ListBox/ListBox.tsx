import { Fragment, ReactElement, ReactNode, useMemo } from 'react';
import { Listbox as HListBox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import cls from './ListBox.module.scss';
import { Button } from '../../../Button';
import { HStack } from '../../../Stack';
import { DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import clsx from 'clsx';
export interface ListBoxItem<T extends string> {
    value: T;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    items: ListBoxItem<T>[];
    className?: string;
    value?: T;
    defaultValue?: string;
    onChange?: (value: T) => void;
    onClick?: () => void;
    label?: string;
    readonly?: boolean;
    direction?: DropdownDirection;
    addonRight?: ReactElement;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
    const {
        items,
        className,
        defaultValue,
        onChange,
        onClick,
        value,
        label,
        readonly,
        direction = 'bottom right',
        addonRight,
    } = props;
    const optionsClasses = [mapDirectionClass[direction], popupCls.menu];
    const selectedItem = useMemo(() => {
        return items?.find((item) => item.value === value);
    }, [items, value]);
    return (
        <HStack gap="4" align="center" className={clsx('', { [cls.readonly]: readonly }, [])}>
            {label && <span className={cls.label}>{`${label} >`}</span>}
            <HListBox
                as={'div'}
                disabled={readonly}
                className={clsx(cls.ListBox, {}, [className, popupCls.popup])}
                value={value}
                onChange={onChange}
            >
                <ListboxButton as="div" className={popupCls.trigger}>
                    <Button
                        type="button"
                        onClick={onClick}
                        theme="filled"
                        disabled={readonly}
                        addonRight={addonRight}
                    >
                        {selectedItem?.content ?? defaultValue}
                    </Button>
                </ListboxButton>
                <ListboxOptions className={clsx(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <ListboxOption
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ focus, selected }) => (
                                <li
                                    className={clsx(cls.item, {
                                        [popupCls.active]: focus,
                                        [cls.disabled]: item.disabled,
                                        [cls.selected]: selected,
                                    })}
                                >
                                    {/* {selected} */}
                                    {item.content}
                                    <div
                                        className={clsx(cls.circle, { [cls.filledCircle]: selected }, [
                                            cls.borderedCircle,
                                        ])}
                                    ></div>
                                </li>
                            )}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </HListBox>
        </HStack>
    );
}
