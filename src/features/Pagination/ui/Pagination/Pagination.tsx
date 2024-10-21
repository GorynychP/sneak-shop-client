import { memo, useEffect } from 'react';
import clsx from 'clsx';
import cls from './Pagination.module.scss';
import ArrowIcon from '@/shared/assets/icon/arrow.svg?react';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import { filterActions, selectorGetFiltersPage } from '@/features/sort';
import { useLocation } from 'react-router-dom';

interface PaginationProps {
    className?: string;
}

export const Pagination = memo(({ className }: PaginationProps) => {
    const dispatch = useAppDispatch();
    const currentPage = useAppSelector(selectorGetFiltersPage);
    const totalCount = localStorage.getItem('totalCount');

    const handelSetPage = (page: number) => () => {
        dispatch(filterActions.setFilters({ page }));
    };

    const generatePageNumbers = () => {
        const pages = [];
        const totalPages = Math.ceil(Number(totalCount) / 9);
        // Показываем всегда первую страницу
        if (currentPage >= 3) {
            pages.push(1);
            if (currentPage >= 3) {
                pages.push('...'); // Добавляем многоточие перед текущими страницами
            }
        }
        // Определяем диапазон отображаемых страниц
        const startPage = Math.max(1, currentPage - 1);
        const endPage = Math.min(totalPages, currentPage + 2);

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        // Показываем последнюю страницу
        if (currentPage < totalPages - 2) {
            if (currentPage < totalPages - 3) {
                pages.push('...'); // Добавляем многоточие перед последней страницей
            }
            pages.push(totalPages);
        }

        return pages;
    };

    const pages = generatePageNumbers();
    console.log('pages', pages);
    return (
        <div className={clsx(cls.Pagination, [className])}>
            {/* <button onClick={handelSetPage(1)}>1</button>
            <button onClick={handelSetPage(2)}>2</button>
            ...
            <button onClick={handelSetPage(currentPage + 1)}>
                <ArrowIcon className={cls.arrowIcon} />
            </button> */}
            {pages.map((page, index) =>
                typeof page === 'number' ? (
                    <button
                        key={index}
                        onClick={handelSetPage(page)}
                        className={clsx({
                            [cls.active]: page === currentPage,
                        })}
                    >
                        {page}
                    </button>
                ) : (
                    <span key={index} className={cls.ellipsis}>
                        {page}
                    </span>
                ),
            )}
        </div>
    );
});
