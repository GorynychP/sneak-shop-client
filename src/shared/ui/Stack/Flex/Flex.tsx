import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import cls from './Flex.module.scss';
import clsx from 'clsx';

export type Mods = Record<string, boolean | string | undefined>;
export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '12' | '16' | '20' | '24' | '28' | '32' | '44' | '50' | '64';

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};
const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};
const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};
const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    12: cls.gap12,
    16: cls.gap16,
    20: cls.gap20,
    24: cls.gap24,
    28: cls.gap28,
    32: cls.gap32,
    44: cls.gap44,
    50: cls.gap50,
    64: cls.gap64,
};
type divProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export interface FlexProps extends divProps {
    className?: string;
    children?: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
    maxHeight?: boolean;
}

export const Flex = (props: FlexProps) => {
    const {
        children,
        className,
        align = 'start',
        justify = 'start',
        direction = 'row',
        gap,
        max,
        maxHeight,
        ...otherProps
    } = props;
    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];
    const mods: Mods = {
        [cls.max]: max,
        [cls.maxHeight]: maxHeight,
    };
    return (
        <div className={clsx(cls.Flex, mods, classes)} {...otherProps}>
            {children}
        </div>
    );
};
