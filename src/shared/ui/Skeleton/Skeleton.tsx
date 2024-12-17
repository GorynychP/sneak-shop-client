import { CSSProperties } from 'react';

import cls from './Skeleton.module.scss';
import clsx from 'clsx';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    height?: number | string;
    width?: number | string;
    border?: string;
}

export const Skeleton = (props: SkeletonProps) => {
    const { className, border, height, width, ...otherProps } = props;
    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
        ...otherProps.style,
    };
    return <div {...otherProps} className={clsx(cls.Skeleton, {}, [className])} style={styles} />;
};
