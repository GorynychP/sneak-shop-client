import { memo } from 'react';
import clsx from 'clsx';
import cls from './SneakersBlocks.module.scss';
import { CardBlock } from '../components/CardBlock/CardBlock';
import { sneakersData } from '../../model/data/sneakersData';

interface SneakersBlocksProps {
    className?: string;
}

export const SneakersBlocks = memo(({ className }: SneakersBlocksProps) => {
    return (
        <div className={clsx(cls.SneakersBlocks, [className])}>
            <CardBlock products={sneakersData} title="SALE" />
            <CardBlock products={sneakersData} title="FOR MEN" />
            <CardBlock products={sneakersData} title="FOR WOMEN" />
        </div>
    );
});
