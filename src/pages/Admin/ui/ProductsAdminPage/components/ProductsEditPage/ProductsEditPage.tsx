import { memo } from 'react';
import clsx from 'clsx';
import cls from './ProductsEditPage.module.scss';
import { useParams } from 'react-router-dom';

interface ProductsEditPageProps {
    className?: string;
}

export const ProductsEditPage = memo(({ className }: ProductsEditPageProps) => {
    const { id } = useParams<{ id: string }>();

    if (id)
        return (
            <div className={clsx(cls.ProductsEditPage, [className])}>
                Страница редактирования продукта {id}
            </div>
        );
    return <div className={clsx(cls.ProductsEditPage, [className])}>Страница создания продукта</div>;
});

export default ProductsEditPage;
