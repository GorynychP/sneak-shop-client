import {
    ForwardedRef,
    forwardRef,
    InputHTMLAttributes,
    ReactElement,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import clsx, { ClassValue } from 'clsx';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChangeHandler' | 'readOnly'>;
interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeSecondary?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
    label?: string;
    addonLeft?: ReactElement;
    addonRight?: ReactElement;
    disabled?: boolean;
    width?: string;
    height?: string;
}

export const Input = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
        className,
        value,
        onChange,
        onChangeSecondary,
        type = 'text',
        width = '100%',
        height = '48px',
        autofocus,
        readonly,
        addonLeft,
        addonRight,
        label,
        disabled,
        ...otherProps
    } = props;
    const refInput = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    useImperativeHandle(ref, () => refInput.current as HTMLInputElement);
    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            refInput.current?.focus();
        }
    }, [autofocus, refInput]);
    useEffect(() => {
        if (readonly || disabled) {
            setIsFocused(false);
        }
    }, [readonly, disabled]);

    const onBlur = () => {
        setIsFocused(false);
    };
    const onFocus = () => {
        setIsFocused(true);
    };
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeSecondary?.(e.target.value);
    };

    const mods: ClassValue = {
        [cls.readonly]: readonly,
        [cls.focused]: isFocused,
        [cls.withAddonLeft]: Boolean(addonLeft),
        [cls.withAddonRight]: Boolean(addonRight),
        [cls.border]: type !== 'search',
    };
    return (
        <div className={clsx(cls.Input, [className])}>
            {label && <label className={cls.label}>{label}</label>}
            <div style={{ width, height }} className={clsx(cls.InputWrapper, mods, [className])}>
                <div className={cls.addonLeft}>{addonLeft}</div>
                <input
                    ref={refInput}
                    className={cls.input}
                    type={type}
                    value={value}
                    onChange={onChangeSecondary ? onChangeHandler : onChange}
                    onBlur={onBlur}
                    // onBlurCapture={onBlur}
                    onFocus={onFocus}
                    readOnly={readonly}
                    disabled={disabled}
                    {...otherProps}
                />
                <div className={cls.addonRight}>{addonRight}</div>
            </div>
        </div>
    );
});
