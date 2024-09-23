import { memo } from 'react';
import clsx from 'clsx';
import cls from './CartEmpty.module.scss';
import { AppLink } from '@/shared/ui/AppLink';
import { Button } from '@/shared/ui/Button';
import ArrowIcon from '@/shared/assets/icon/arrow.svg?react';
import { VStack } from '@/shared/ui/Stack';

interface CartEmptyProps {
    className?: string;
}

export const CartEmpty = memo(({ className }: CartEmptyProps) => {
    return (
        <VStack align="center" gap="32" className={clsx(cls.CartEmpty, [className])}>
            <h2>Корзина пустая 😕</h2>
            <p>Перейдите к каталогу, чтобы начать покупки</p>
            <AppLink to="/">
                <Button theme="accent_button">
                    Вернуться на главную
                    <ArrowIcon className={cls.arrowIcon} />
                </Button>
            </AppLink>
        </VStack>
    );
});
