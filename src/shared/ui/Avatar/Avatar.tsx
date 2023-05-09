import {type CSSProperties, type FC, useMemo} from 'react'
import DefAvatar from '@/shared/assets/icons/user-filled.svg'
import {classNames} from '@/shared/lib/classNames/classNames'
import {AppImage} from '../AppImage'
import {Icon} from '../Icon'
import {Skeleton} from '../Skeleton'
import cls from './Avatar.module.scss'

interface AvatarProps {
    className?: string
    src?: string
    text?: string
    size?: number
    invertedColor?: boolean
}

export const Avatar: FC<AvatarProps> = (props) => {
    const style: CSSProperties = useMemo(() => {
        return {
            width: props.size || 100,
            height: props.size || 100
        }
    }, [props.size])

    return (
        <AppImage
            fallback={<Skeleton width={props.size || 100} height={props.size || 100} border={'50%'}/>}
            errorFallback={<Icon inverted={props.invertedColor} width={props.size || 100} Svg={DefAvatar}/>}
            className={classNames(cls.Avatar, {}, [props.className])}
            src={props.src}
            style={style}
            alt={props.text}
        />
    )
}
