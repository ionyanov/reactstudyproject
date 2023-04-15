import {type FC, memo} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
    'NORMAL' = 'normal',
    'INVERTED' = 'inverted',
    'ERROR' = 'error'
}

export enum TextAlign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right'
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

type HeaderTagType = 'h1' | 'h2' | 'h3'
const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1'
}

interface TextProps {
    className?: string
    title?: string | null
    text?: string | null
    theme?: TextTheme
    align?: TextAlign
    size?: TextSize
    dataTestId?: string
}

export const Text: FC<TextProps> = memo<TextProps>((props: TextProps) => {
    const {
        className,
        title = '',
        text = '',
        theme = TextTheme.NORMAL,
        align = TextAlign.LEFT,
        size = TextSize.M,
        dataTestId = 'Text'
    } = props

    const HeaderTag = mapSizeToHeaderTag[size]

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]])}>
            {title && <HeaderTag data-testid={`${dataTestId}.Header`} className={cls.title}>{title}</HeaderTag>}
            {text && <p data-testid={`${dataTestId}.Paragraph`} className={cls.text}>{text}</p>}
        </div>
    )
})

Text.displayName = 'Text'
