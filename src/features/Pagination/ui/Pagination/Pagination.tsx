import { memo } from 'react';
import clsx from 'clsx';
import cls from './Pagination.module.scss';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import { filterActions, selectorGetFiltersPage } from '@/features/sort';

// import ArrowIcon from '@/shared/assets/icon/arrow.svg?react';
// import { useLocation } from 'react-router-dom';

interface PaginationProps {
    className?: string;
    totalCount?: number;
}

export const Pagination = memo(({ className, totalCount }: PaginationProps) => {
    const currentPage = useAppSelector(selectorGetFiltersPage);

    const dispatch = useAppDispatch();

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

    return (
        <div className={clsx(cls.Pagination, [className])}>
            {pages.length > 1 &&
                pages.map((page, index) =>
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
