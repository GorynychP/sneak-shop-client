import { memo } from 'react';
import clsx from 'clsx';
import cls from './CartTotal.module.scss';
import { Button } from '@/shared/ui/Button';

interface CartTotalProps {
    className?: string;
}

export const CartTotal = memo(({ className }: CartTotalProps) => {
    return (
        <div className={clsx(cls.CartTotal, [className])}>
            <div className={clsx(cls.borderBottom, ['max-width', 'center'])}>
                <h3> Оформить заказ</h3>
            </div>
            <div className="between max-width ">
                <p>Заказ:</p>
                <p>3 товара</p>
            </div>

            <ul className={cls.items}>
                <li className={cls.item}>Кроссовки Nike Air Force 1 Low</li>
                <li className={cls.item}> Кроссовки Nike Air Force 1 Low</li>
                <li className={cls.item}>Кроссовки Nike Air Force 1 Low</li>
                <li className={cls.item}>Кроссовки Nike Air Force 1 Low</li>
                <li className={cls.item}>Кроссовки Nike Air Force 1 Low</li>
            </ul>

            <div className={clsx(cls.borderBottom, 'max-width between')}>
                <p>Итого:</p>
                <b>5000$</b>
            </div>

            <div className="between max-width ">
                <p>К оплате:</p>
                <b>5000$</b>
            </div>

            <Button theme="accent_button">Оформить</Button>
        </div>
    );
});
