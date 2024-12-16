import { ReactNode, useEffect } from 'react';
import cls from './Modal.module.scss';
import clsx, { ClassValue } from 'clsx';
import { Portal } from '../Portal';
import { Overlay } from '../Overlay';
import { useTheme } from '../../lib/hooks/useTheme/useTheme';
import { useModal } from '../../lib/hooks/useModal/useModal';

export type ModalPadding = '0' | '8' | '16' | '24' | '32' | '40';

const mapPaddingToClasses: Record<ModalPadding, string> = {
    '0': 'gap_0',
    '8': 'gap_8',
    '16': 'gap_16',
    '24': 'gap_24',
    '32': 'gap_32',
    '40': 'gap_40',
};

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    padding?: ModalPadding;
    onClose?: () => void;
    lazy?: boolean;
    isVisibleCloseBtn?: boolean;
}

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy, padding = '0', isVisibleCloseBtn = false } = props;
    const { theme } = useTheme();
    const { close, isClosing, isMounted } = useModal({
        isOpen,
        onClose,
        animationDelay: 300,
    });

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const paddingClass = mapPaddingToClasses[padding];
    const mods: ClassValue = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };
    if (lazy && !isMounted) {
        return null;
    }
    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            <div className={clsx(cls.Modal, mods, [className, theme])}>
                {isVisibleCloseBtn && (
                    <button onClick={close} className={cls.closeBtn}>
                        ✕
                    </button>
                )}
                <Overlay onClick={close} />
                <div className={clsx(cls.content, {}, [cls[paddingClass]])}>{children}</div>
            </div>
        </Portal>
    );
};
