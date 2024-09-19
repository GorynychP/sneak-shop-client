import { memo } from 'react';
import clsx from 'clsx';
import cls from './Pagination.module.scss';
import ArrowIcon from '@/shared/assets/icon/arrow.svg?react';

interface PaginationProps {
    className?: string;
}

export const Pagination = memo(({ className }: PaginationProps) => {
    return (
        <div className={clsx(cls.Pagination, [className])}>
            <button>1</button>
            <button>2</button>
            ...
            <button>
                <ArrowIcon className={cls.arrowIcon} />
            </button>
        </div>
    );
});
