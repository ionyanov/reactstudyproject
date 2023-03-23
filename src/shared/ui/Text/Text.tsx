import {type FC, memo} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
    'NORMAL' = 'normal',
    'ERROR' = 'error'
}

export enum TextAlign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right'
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string
    title?: string | null
    text?: string | null
    theme?: TextTheme
    align?: TextAlign
    size?: TextSize
}

export const Text: FC<TextProps> = memo<TextProps>((props: TextProps) => {
    const {
        className,
        title = '',
        text = '',
        theme = TextTheme.NORMAL,
        align = TextAlign.LEFT,
        size = TextSize.M
    } = props

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]])}>
            {title && <div className={cls.title}>{title}</div>}
            {text && <div className={cls.text}>{text}</div>}
        </div>
    )
})

Text.displayName = 'Text'
