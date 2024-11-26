import { memo, ReactElement } from 'react';
import clsx from 'clsx';
import cls from './StoreSettingsLayout.module.scss';
import { Background } from '@/widgets/Background';

interface StoreSettingsLayoutProps {
    className?: string;
    header: ReactElement;
    sidebar: ReactElement;
    content: ReactElement;
    footer?: ReactElement;
}

export const StoreSettingsLayout = memo(
    ({ className, header, content, sidebar, footer }: StoreSettingsLayoutProps) => {
        return (
            <div className={clsx(cls.StoreSettingsLayout, [className])}>
                {sidebar && <div className={cls.sidebar}>{sidebar}</div>}
                <div className={cls.header}>{header}</div>
                <div className={cls.content}>
                    <Background>{content}</Background>
                </div>
                {footer && <div className={cls.footer}>{footer}</div>}
            </div>
        );
    },
);
