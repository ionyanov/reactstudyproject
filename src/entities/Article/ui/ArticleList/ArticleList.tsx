import {type FC, type HTMLAttributeAnchorTarget, type ReactNode} from 'react'
import {useTranslation} from 'react-i18next'
import {classNames} from '@/shared/lib/classNames/classNames'
import {VStack} from '@/shared/ui/Stack'
import {Text, TextAlign} from '@/shared/ui/Text'
import {type Article, ArticleView} from '../../model/types/article'
import {ArticleListItem} from '../ArticleListItem/ArticleListItem'
import {ArticleListSkeletonItem} from '../ArticleListItem/ArticleListItemSkeleton'
import cls from './ArticleList.module.scss'

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
}

const getSkeletons: (view: ArticleView) => ReactNode =
    (view: ArticleView) => {
        return new Array(view === ArticleView.GRID ? 3 : 1)
            .fill(0)
            .map((item, index) => (
                <ArticleListSkeletonItem key={index} view={view}/>
            ))
    }

export const ArticleList: FC<ArticleListProps> = (props) => {
    const {t} = useTranslation()

    const renderArticle: (article: Article) => ReactNode =
        (article: Article) => {
            return (
                <ArticleListItem
                    key={article.id}
                    article={article}
                    view={props.view || ArticleView.GRID}
                    target={props.target}
                />
            )
        }

    if (!props.isLoading && !props.articles.length) {
        return (
            <VStack gap={'8'} max className={classNames(cls.ArticleList, {}, [props.className, cls[props.view || ArticleView.GRID]])}>
                <Text title={t('Статьи не найдены')} align={TextAlign.CENTER}/>
            </VStack>)
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
