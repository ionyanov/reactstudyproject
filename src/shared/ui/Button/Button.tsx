import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clear_inverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundinverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

type ButtonProps = {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    dataTestId?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = (props) => {
    const {
        className = '',
        children,
        theme = ButtonTheme.OUTLINE,
        size = ButtonSize.M,
        square = false,
        disabled = false,
        dataTestId = 'Button',
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    };

    const addClassName: string[] = [className, cls[theme], cls[size]];

    return (
        <button
            type="button"
            className={classNames(cls.button, mods, addClassName)}
            disabled={disabled}
            data-testid={`${dataTestId}`}
            {...otherProps}>
            {children}
        </button>
    );
};
