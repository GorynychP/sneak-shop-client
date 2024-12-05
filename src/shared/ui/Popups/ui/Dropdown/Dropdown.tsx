import { Fragment, ReactNode, useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import cls from './Dropdown.module.scss';
import clsx from 'clsx';
import { DropdownDirection } from '@/shared/types/ui';
import { AppLink } from '../../../AppLink';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    key: number;
}
interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropdownDirection;
    checkbox?: boolean;
    isClick?: boolean;
}

export function Dropdown(props: DropdownProps) {
    const { className, items, trigger, direction = 'bottom right', isClick = false, checkbox } = props;
    const menuClasses = [mapDirectionClass[direction], popupCls.menu];
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Menu as="div" className={clsx(cls.Dropdown, {}, [className, popupCls.popup])}>
            {({ open }) => {
                const clickIsOpen = !isClick ? isOpen : open;
                return (
                    <>
                        <MenuButton
                            onMouseLeave={!isClick ? () => setIsOpen(false) : () => {}}
                            onMouseEnter={!isClick ? () => setIsOpen(true) : () => {}}
                            as="div"
                            className={popupCls.trigger}
                        >
                            {trigger}
                        </MenuButton>

                        {clickIsOpen && (
                            <MenuItems
                                static={!isClick}
                                onMouseLeave={!isClick ? () => setIsOpen(false) : () => {}}
                                onMouseEnter={!isClick ? () => setIsOpen(true) : () => {}}
                                className={clsx(cls.menu, {}, menuClasses)}
                            >
                                {items.map((item) => {
                                    const content = ({ active }: { active: boolean }) => (
                                        <button
                                            type="button"
                                            onClick={item.onClick}
                                            disabled={item.disabled}
                                            className={clsx(cls.item, {
                                                [popupCls.active]: active,
                                            })}
                                        >
                                            {item.content}
                                            {checkbox && (
                                                <div
                                                    className={clsx(
                                                        cls.circle,
                                                        { [cls.filledCircle]: active },
                                                        [cls.borderedCircle],
                                                    )}
                                                ></div>
                                            )}
                                        </button>
                                    );
                                    if (item.href) {
                                        return (
                                            <MenuItem
                                                as={AppLink}
                                                to={item.href}
                                                key={item.href}
                                                target={item.target || '_self'}
                                                disabled={item.disabled}
                                            >
                                                {content}
                                            </MenuItem>
                                        );
                                    }
                                    return (
                                        <MenuItem as={Fragment} key={item.key} disabled={item.disabled}>
                                            {content}
                                        </MenuItem>
                                    );
                                })}
                            </MenuItems>
                        )}
                    </>
                );
            }}
        </Menu>
    );
}
