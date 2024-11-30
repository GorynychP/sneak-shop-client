import { Checkbox } from '@headlessui/react';
import { Fragment } from 'react';
import cls from './Checkbox.module.scss';
import clsx from 'clsx';

export function CheckboxItem({
    enabled,
    setEnabled,
}: {
    enabled: boolean;
    setEnabled: (enabled: boolean) => void;
}) {
    return (
        <Checkbox checked={enabled} onChange={setEnabled} as={Fragment}>
            {({ checked, disabled }) => (
                <span
                    className={clsx(
                        cls.checkbox,
                        !checked && cls.unchecked,
                        checked && !disabled && cls.checked,
                        checked && disabled && cls.checkedDisabled,
                        disabled && cls.disabled,
                    )}
                >
                    <svg
                        className={clsx(cls.icon, checked ? cls.visible : cls.hidden)}
                        viewBox="0 0 14 14"
                        fill="none"
                    >
                        <path
                            d="M3 8L6 11L11 3.5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            )}
        </Checkbox>
    );
}
