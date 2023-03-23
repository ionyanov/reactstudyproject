import {type FC, memo} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'

interface ArticlePageProps {
    className?: string
}

const ArticlesPage: FC<ArticlePageProps> = (props) => {
    return (
        <div className={classNames(cls.ArticlePage, {}, [props.className])}>

        </div>
    )
}

export default memo(ArticlesPage)
