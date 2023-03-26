import {type FC} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {Card} from 'shared/ui/Card/Card'
import {Skeleton} from 'shared/ui/Skeleton/Skeleton'
import {ArticleView} from '../../model/types/article'
import cls from './ArticleListItem.module.scss'

interface ArticleListItemSkeletonProps {
    className?: string
    view: ArticleView
}

export const ArticleListSkeletonItem: FC<ArticleListItemSkeletonProps> = (props) => {
    if (props.view === ArticleView.LIST) {
        return (
            <Card className={classNames(cls.ArticleListItem, {}, [props.className, cls[props.view]])}>
                <div className={cls.header}>
                    <Skeleton border={'50%'} height={30} width={30}/>
                    <Skeleton height={16} width={100} className={cls.username}/>
                    <Skeleton height={16} width={100} className={cls.date}/>
                </div>
                <Skeleton height={16} width={300} className={cls.title}/>
                <Skeleton height={16} width={300} className={cls.types}/>
            </Card>
        )
    }

    return (
        <Card
            className={classNames(cls.ArticleListItem, {}, [props.className, cls[props.view]])}
        >
            <div className={cls.imageWrapper}>
                <Skeleton className={cls.img}/>
            </div>
            <div className={cls.infoWraper}>
                <Skeleton height={16} width={50} className={cls.types}/>
                <Skeleton height={16} width={50} className={cls.view}/>
            </div>
            <Skeleton height={16} width={100} className={cls.title}/>
        </Card>
    )
}
