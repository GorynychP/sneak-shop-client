import { ReactNode } from 'react';
import cls from './Popover.module.scss';
import { Popover as HPopover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import clsx from 'clsx';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    children: ReactNode;
    direction?: DropdownDirection;
}

export function Popover(props: PopoverProps) {
    const { className, trigger, direction = 'bottom left', children } = props;
    const menuClasses = [mapDirectionClass[direction], popupCls.menu];

    return (
        <HPopover className={clsx(cls.Popover, {}, [className, popupCls.popup])}>
            <PopoverButton as="div" className={popupCls.trigger}>
                {trigger}
            </PopoverButton>

            <PopoverPanel className={clsx(cls.panel, {}, menuClasses)}>{children}</PopoverPanel>
        </HPopover>
    );
}
