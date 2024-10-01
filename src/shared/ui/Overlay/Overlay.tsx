import cls from './Overlay.module.scss';
import clsx from 'clsx';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

export const Overlay = ({ className, onClick }: OverlayProps) => {
    return <div onClick={onClick} className={clsx(cls.Overlay, {}, [className])}></div>;
};
