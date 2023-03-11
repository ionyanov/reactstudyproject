import {type ButtonHTMLAttributes, type FC} from 'react'
import cls from './Button.module.scss'
import {classNames} from 'shared/lib/classNames/classNames'

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clear_inverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundinverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

type ButtonProps = {
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
    disabled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = props => {
    const {
        className = '',
        children,
        theme = ButtonTheme.OUTLINE,
        size = ButtonSize.M,
        square = false,
        disabled = false,
        ...otherProps
    } = props

    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls.disabled]: disabled
    }

    const addClassName: string[] = [
        className,
        cls[theme],
        cls[size]
    ]

    return (
        <button type="button"
            className={classNames(cls.button, mods, addClassName)}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    )
}
