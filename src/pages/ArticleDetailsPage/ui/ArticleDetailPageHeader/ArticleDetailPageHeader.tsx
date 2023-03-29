import {type FC, useCallback} from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {getCanEditArticle} from 'pages/ArticleDetailsPage/model/selectors/article'
import {getArticleDetailsData} from 'entities/Article'
import {RoutePath} from 'shared/config/routeConfig/routeConfig'
import {classNames} from 'shared/lib/classNames/classNames'
import {Button} from 'shared/ui/Button/Button'
import cls from './ArticleDetailPageHeader.module.scss'

interface ArticleDetailPageHeaderProps {
    className?: string
}

export const ArticleDetailPageHeader: FC<ArticleDetailPageHeaderProps> = (props) => {
    const {t} = useTranslation()
    const navigate = useNavigate()
    const canEdit = useSelector(getCanEditArticle)
    const article = useSelector(getArticleDetailsData)

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

    const onEditArticle = useCallback(() => {
        navigate([RoutePath.article_details, article?.id, '/edit'].join())
    }, [navigate, article])

    return (
        <div className={classNames(cls.ArticleDetailPageHeader, {}, [props.className])}>
            <Button
                onClick={onBackToList}
            >{t('Назад к списку')}</Button>
            {canEdit &&
                <Button
                    onClick={onEditArticle}
                    className={cls.editBtn}
                >{t('Редактировать')}</Button>
            }
        </div>
    )
}
