import {type FC} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import './Loader.scss'

export const Loader: FC = (props) => {
    return (
        <span className={classNames('loader')}/>
    )
}
