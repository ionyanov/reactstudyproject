import {type FC, memo} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './Overlay.module.scss'

interface OverlayProps {
    className?: string
    onClick?: () => void
}

export const Overlay: FC<OverlayProps> = memo<OverlayProps>((props: OverlayProps) => {
    return (
        <div onClick={props.onClick}
            className={classNames(cls.Overlay, {}, [props.className])}
        />
    )
})
