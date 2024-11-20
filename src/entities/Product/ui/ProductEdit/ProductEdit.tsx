import { memo } from 'react';
import clsx from 'clsx';
import cls from './ProductEdit.module.scss';

interface ProductEditProps {
    className?: string;
}

export const ProductEdit = memo(({ className }: ProductEditProps) => {
    return <div className={clsx(cls.ProductEdit, [className])}></div>;
});
