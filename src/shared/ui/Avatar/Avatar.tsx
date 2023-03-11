import {type CSSProperties, type FC, useMemo} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'

interface AvatarProps {
    className?: string
    src?: string
    text?: string
    size?: number
}

export const Avatar: FC<AvatarProps> = (props) => {
    const style: CSSProperties = useMemo(() => {
        return {
            width: props.size,
            height: props.size
        }
    }, [props.size])

    return (
        <img
            className={classNames(cls.Avatar, {}, [props.className])}
            src={props.src}
            style={style}
            alt={props.text}
        />
    )
}
