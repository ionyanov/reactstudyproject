import {
    type DetailedHTMLProps,
    type FC,
    type HTMLAttributes,
    type ReactNode,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32';

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
};

type DevProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export interface FlexProps extends DevProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
}

export const Flex: FC<FlexProps> = (props) => {
    const {
        justify = 'start',
        align = 'center',
        direction = 'row',
        gap,
        max,
        children,
        className,
        ...otherProps
    } = props;

    const classes = [
        className ?? '',
        directionClasses[direction],
        alignClasses[align],
        justifyClasses[justify],
        gap && gapClasses[gap],
    ];

    return (
        <div
            className={classNames(cls.Flex, { [cls.max]: max }, classes)}
            {...otherProps}>
            {children}
        </div>
    );
};
