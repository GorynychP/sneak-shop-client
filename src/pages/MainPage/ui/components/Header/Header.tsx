import { memo } from 'react';
import clsx from 'clsx';
import cls from './Header.module.scss';
import BrandSneakersImage from '@/shared/assets/brand-icon.png';
import { Background } from '@/widgets/Background';
interface HeaderProps {
    className?: string;
}

export const Header = memo(({ className }: HeaderProps) => {
    return (
        <div className={clsx(cls.Header, [className])}>
            <div className={cls.leftBlockImage}>
                <Background height="650px">
                    <img width={470} src={BrandSneakersImage} />
                </Background>
            </div>
            <div className={cls.rightBlockInfo}>
                <div className={cls.info}>
                    <h1 className={cls.title}>SneakShop</h1>
                    <p className={cls.description}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis cupiditate laboriosam
                        alias mollitia veritatis cumque accusantium molestiae fuga ducimus at assumenda
                        voluptatum ut eos sequi, excepturi repellat deleniti. Cum, nesciunt. <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deserunt esse omnis
                        consectetur eveniet, amet quos illo dolorum ut tempora! Delectus eum veritatis dicta
                        eligendi non sed, accusantium necessitatibus minus?
                    </p>
                </div>
            </div>
        </div>
    );
});
