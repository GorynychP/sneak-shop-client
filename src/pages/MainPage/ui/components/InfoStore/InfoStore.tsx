import { memo } from 'react';
import clsx from 'clsx';
import cls from './InfoStore.module.scss';
import DeliveryTruckIcon from '@/shared/assets/ozer/delivery-truck.png';
import WalletIcon from '@/shared/assets/ozer/wallet.png';
import ReturnIcon from '@/shared/assets/ozer/return.png';
import SneakerIcon from '@/shared/assets/ozer/sneaker.png';

interface InfoStoreProps {
    className?: string;
}

export const InfoStore = memo(({ className }: InfoStoreProps) => {
    return (
        <div className={clsx(cls.InfoStore, [className])}>
            <div className={cls.flexDivСolum}>
                <div className={cls.flexDiv}>
                    <img width={92} height={82} src={DeliveryTruckIcon} alt="delivery-truck" />{' '}
                    <h3>Быстрая доставка</h3>
                </div>
                <p>Курьером, почтой России</p>
            </div>
            <div className={cls.flexDivСolum}>
                <div className={cls.flexDiv}>
                    <img width={62} height={62} src={WalletIcon} alt="wallet" /> <h3>Удобная оплата</h3>
                </div>
                <p>Картой/наличными</p>
            </div>
            <div className={cls.flexDivСolum}>
                <div className={cls.flexDiv}>
                    <img width={62} height={62} src={ReturnIcon} alt="return" /> <h3>Легкий возврат</h3>
                </div>
                <p>Почтой России</p>
            </div>
            <div className={cls.flexDivСolum}>
                <div className={cls.flexDiv}>
                    <img width={74} height={74} src={SneakerIcon} alt="sneaker" /> <h3>Примерка</h3>
                </div>
                <p>Примерка перед оплатой</p>
            </div>
        </div>
    );
});
