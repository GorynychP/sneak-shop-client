import { memo } from 'react';
import clsx from 'clsx';
import cls from './CartTotal.module.scss';
import { Button } from '@/shared/ui/Button';
import { formatUSD } from '@/shared/lib/utils/format/currency';
import { HStack, VStack } from '@/shared/ui/Stack';

interface CartTotalProps {
    className?: string;
    totalPrice: number;
    discountTotalPrice: number;
    discount: number;
    count: number;
}

export const CartTotal = memo(
    ({ className, totalPrice, discountTotalPrice, discount, count }: CartTotalProps) => {
        return (
            <div className={clsx(cls.CartTotal, [className])}>
                <VStack max gap="8">
                    <div className={clsx(cls.borderBottom, ['max-width', 'center'])}>
                        <h3> Оформить заказ</h3>
                    </div>
                    <div className="between max-width ">
                        <p>Заказ:</p>
                        <p>{count} товара</p>
                    </div>
                </VStack>

                {/* <ul className={cls.items}>
                    <li className={cls.item}>Кроссовки Nike Air Force 1 Low</li>
                    <li className={cls.item}>Кроссовки Nike Air Force 1 Low</li>
                    <li className={cls.item}>Кроссовки Nike Air Force 1 Low</li>
                    <li className={cls.item}>Кроссовки Nike Air Force 1 Low</li>
                    <li className={cls.item}>Кроссовки Nike Air Force 1 Low</li>
                </ul> */}

                <VStack className={clsx(cls.borderBottom, 'max-width between')}>
                    <HStack max justify="between">
                        <p>Итого:</p>
                        <b>{formatUSD(totalPrice)}</b>
                    </HStack>
                    <HStack max justify="between">
                        <p>Скидка:</p>
                        <b className={cls.discount}>≈ {discount} %</b>
                    </HStack>
                </VStack>
                <div className="between max-width ">
                    <p className={cls.textTotal}>К оплате:</p>
                    <b className={cls.totalPrice}>{formatUSD(discountTotalPrice)}</b>
                </div>

                <Button theme="accent_button">Оформить</Button>
            </div>
        );
    },
);
