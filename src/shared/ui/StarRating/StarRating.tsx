import { memo, useEffect, useState } from 'react';
import cls from './StarRating.module.scss';
import StarIcon from '@/shared/assets/icon/Star.svg?react';
import clsx from 'clsx';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
    fixed?: boolean;
}
const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const { className, onSelect, fixed, selectedStars = 0, size = 30 } = props;
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));
    useEffect(() => {
        if (isSelected) {
            setCurrentStarsCount(selectedStars);
        }
    }, [isSelected, selectedStars]);
    const onHover = (starsCount: number) => () => {
        setCurrentStarsCount(starsCount);
    };
    const onLeave = () => {
        if (isSelected) {
            setCurrentStarsCount(selectedStars);
        } else {
            setCurrentStarsCount(selectedStars);
        }
    };
    const onClick = (starsCount: number) => () => {
        if (fixed) return;
        setCurrentStarsCount(starsCount);
        onSelect?.(starsCount);
        setIsSelected(true);
    };

    return (
        <div className={clsx(cls.StarRating, [className])}>
            {stars.map((starNumber) => (
                <StarIcon
                    className={clsx(cls.starIcon, { [cls.fixed]: fixed }, [
                        currentStarsCount >= starNumber ? cls.hovered : cls.normal,
                    ])}
                    key={starNumber}
                    width={size}
                    height={size}
                    onMouseLeave={fixed ? undefined : onLeave}
                    onMouseEnter={fixed ? undefined : onHover(starNumber)}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    );
});
