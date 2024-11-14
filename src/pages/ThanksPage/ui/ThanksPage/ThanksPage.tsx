import { memo } from 'react';
import clsx from 'clsx';
import cls from './ThanksPage.module.scss';
import { Page } from '@/widgets/Page';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/shared/ui/Button';

interface ThanksPageProps {
    className?: string;
}

export const ThanksPage = memo(({ className }: ThanksPageProps) => {
    const navigate = useNavigate();
    const backNavigate = () => {
        navigate('/');
    };
    return (
        <Page className={clsx(cls.ThanksPage, [className])}>
            <h1> Спасибо за заказ !!!</h1>
            <h3>
                Мы рады за ваш выбор, и будем рады видеть вас снова. Просмотреть заказ и время доставки можно
                во вкладке "Мои заказы"
            </h3>
            <Button theme="accent_button" onClick={backNavigate}>
                На главную
            </Button>
        </Page>
    );
});
