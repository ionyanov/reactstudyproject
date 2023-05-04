import {type FC, memo} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import './Loader.scss'

export const Loader: FC = memo((props) => {
    return (
        <span className={classNames('loader')}/>
    )
})

Loader.displayName = 'Loader'
