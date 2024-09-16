import { memo } from 'react';
import clsx from 'clsx';
import cls from './ProductList.module.scss';

interface ProductListProps {
	className?: string;
}

export const ProductList = memo(({ className }: ProductListProps) => {

	return (
	<div className={clsx(cls.ProductList, [className])}>

	</div>
	);
});