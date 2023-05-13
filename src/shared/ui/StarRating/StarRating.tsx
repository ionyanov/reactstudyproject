import type { FC } from 'react';
import { useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import StarIcon from '../../assets/icons/star.svg';
import { Icon } from '../Icon/Icon';
import cls from './StarRating.module.scss';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stats = [1, 2, 3, 4, 5];
const DEF_SIZE = 30;

export const StarRating: FC<StarRatingProps> = (props) => {
    const [currentStar, setCurrentStar] = useState(props.selectedStars ?? 0);
    const [isSelected, setIsSelected] = useState(Boolean(props.selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStar(starsCount);
        }
    };

    const onLeave: () => void = () => {
        if (!isSelected) {
            setCurrentStar(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            props.onSelect?.(starsCount);
            setCurrentStar(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={props.className}>
            {stats.map((starNumber) => (
                <Icon
                    Svg={StarIcon}
                    key={starNumber}
                    width={props.size ?? DEF_SIZE}
                    height={props.size ?? DEF_SIZE}
                    className={classNames(
                        cls.StarRating,
                        {
                            [cls.hovered]: currentStar >= starNumber,
                            [cls.canSelected]: !isSelected,
                        },
                        [cls.normal],
                    )}
                    onMouseLeave={onLeave}
                    onMouseOver={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    );
};
