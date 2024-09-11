import clsx from 'clsx';
import { Loader } from '@/shared/ui/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <div className={clsx(cls.PageLoader, [className])}>
            <Loader />
        </div>
    );
};
