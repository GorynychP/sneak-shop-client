import clsx from 'clsx';
import cls from './PageError.module.scss';
import { Button } from '@/shared/ui/Button';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const reloadPage = () => {
        location.reload();
    };
    return (
        <div className={clsx(cls.PageError, [className])}>
            <h3>Произошла непредвиденная ошибка</h3>
            <Button theme="accent_button" onClick={reloadPage}>
                Обновить страницу
            </Button>
        </div>
    );
};
