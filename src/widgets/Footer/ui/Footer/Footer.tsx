import { memo } from 'react';
import clsx from 'clsx';
import cls from './Footer.module.scss';
import { AppLink } from '@/shared/ui/AppLink';
// import TelegramLogo from '@/shared/assets/icon/telegram.svg?react';
import TelegramLogo from '@/shared/assets/icon/telegram.svg?react';
import TwitterLogo from '@/shared/assets/icon/twitter.svg?react';
import InstagramLogo from '@/shared/assets/icon/instagram.svg?react';
interface FooterProps {
    className?: string;
}

export const Footer = memo(({ className }: FooterProps) => {
    return (
        <div className={clsx(cls.Footer, [className])}>
            <div className={cls.nameBrandAndPhone}>
                <h2>SneakShop</h2>
                <p>+7 (ХХХ) ХХ ХХ ХХХ</p>
            </div>
            <div className={cls.infoShop}>
                <AppLink to="#">О нас</AppLink>
                <AppLink to="#">Возврат</AppLink>
                <AppLink to="#">Доставка и оплата</AppLink>
            </div>
            <div className={cls.contacts}>
                <AppLink to="#">Контакты</AppLink>
                <AppLink to="#">xxxxxxxxxxxxxxx@gmail.com</AppLink>
                <AppLink to="#">Политика конфиденциальности</AppLink>
            </div>
            <div className={cls.networks}>
                <AppLink to="#">
                    <TelegramLogo />
                </AppLink>
                <AppLink to="#">
                    <TwitterLogo />
                </AppLink>
                <AppLink to="#">
                    <InstagramLogo />
                </AppLink>
            </div>
        </div>
    );
});
