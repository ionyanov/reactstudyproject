import {type FC, type ReactNode} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import {type Article, ArticleView} from '../../model/types/article'
import {ArticleListItem} from '../ArticleListItem/ArticleListItem'
import {ArticleListSkeletonItem} from '../ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
}

const getSkeletons: (view: ArticleView) => ReactNode =
    (view: ArticleView) => {
        return new Array(view === ArticleView.GRID ? 9 : 3)
            .fill(0)
            .map((item, index) => (
                <ArticleListSkeletonItem key={index} view={view}/>
            ))
    }

export const ArticleList: FC<ArticleListProps> = (props) => {
    const renderArticle: (article: Article) => ReactNode =
        (article: Article) => {
            return (
                <ArticleListItem
                    key={article.id}
                    article={article}
                    view={props.view || ArticleView.GRID}
                />
            )
        }

    return (
        <div className={classNames(cls.ArticleList, {}, [props.className, cls[props.view || ArticleView.GRID]])}>
            {props.articles.length > 0 && (
                props.articles.map(renderArticle)
            )}
            {props.isLoading && (getSkeletons(props.view || ArticleView.GRID))}
        </div>
    )
}
