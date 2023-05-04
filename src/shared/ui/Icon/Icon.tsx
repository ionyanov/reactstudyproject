import React, {type FC} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './Icon.module.scss'

interface IconProps {
    className?: string
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    inverted?: boolean
}

export const Icon: FC<IconProps> = (props) => {
    const Svg = props.Svg

    return (
        <Svg className={classNames(props.inverted ? cls.inverted : cls.Icon, {}, [props.className])}/>
    )
}
