import { memo } from 'react';
import clsx from 'clsx';
import cls from './OrdersEmpty.module.scss';
import { VStack } from '@/shared/ui/Stack';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/shared/ui/Button';
import ArrowIcon from '@/shared/assets/icon/arrow.svg?react';

interface OrdersEmptyProps {
    className?: string;
}

export const OrdersEmpty = memo(({ className }: OrdersEmptyProps) => {
    const navigate = useNavigate();
    return (
        <VStack align="center" gap="32" className={clsx(cls.OrdersEmpty, [className])}>
            <h2>У вас нет заказов 😕</h2>
            <p>Перейдите к каталогу, чтобы начать покупки</p>
            <Button onClick={() => navigate('/')} theme="accent_button">
                Вернуться на главную
                <ArrowIcon className={cls.arrowIcon} />
            </Button>
        </VStack>
    );
});
