import {type FC, memo} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import './PageLoader.scss'
import {Loader} from 'shared/ui/Loader/Loader'

interface PageLoaderProps {
    className?: string
}

export const PageLoader: FC<PageLoaderProps> = memo<PageLoaderProps>((props: PageLoaderProps) => {
    return (
        <div className={classNames('pageloader', {}, [props.className])}>
            <Loader/>
        </div>
    )
})
PageLoader.displayName = 'PageLoader'
