import { memo } from 'react';
import clsx from 'clsx';
import cls from './CharacteristicsContainer.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';

type T_Characteristics = {
    name: string;
    value: string;
};

const characteristics: T_Characteristics[] = [
    {
        name: 'Бренд',
        value: 'Nike',
    },
    {
        name: 'Длина',
        value: '100 см',
    },
    {
        name: 'Ширина',
        value: '50 см',
    },
    {
        name: 'Высота',
        value: '10 см',
    },
];
interface CharacteristicsContainerProps {
    className?: string;
    characteristics?: T_Characteristics[];
}

export const CharacteristicsContainer = memo(({ className }: CharacteristicsContainerProps) => {
    let content;

    if (!characteristics) {
        return null;
    } else if (characteristics.length === 0) {
        content = <div>Характеристики отсутствуют</div>;
    } else {
        content = (
            <>
                {characteristics.map((item) => (
                    <HStack align="center" gap="20" key={item.name}>
                        <p style={{ margin: 0 }}>{item.name}:</p> <p>{item.value}</p>
                    </HStack>
                ))}
            </>
        );
    }
    return (
        <div className={clsx(cls.CharacteristicsContainer, [className])}>
            <h3>Характеристики:</h3>
            <VStack gap="8">{content}</VStack>
        </div>
    );
});
