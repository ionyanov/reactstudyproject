import {type FC, useCallback} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import {useTranslation} from 'react-i18next'
import {ArticleForm} from 'entities/Article'
import {useNavigate, useParams} from 'react-router-dom'
import {ArticleCommentList} from 'features/ArticleCommentList'
import {Text} from 'shared/ui/Text/Text'
import {AddCommentCard} from 'features/AddCommentCard'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {sendComment} from '../model/services/sendComment'
import {Button} from 'shared/ui/Button/Button'
import {RoutePath} from 'shared/config/routeConfig/routeConfig'
import {Page} from 'shared/ui/Page/Page'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const {t} = useTranslation('article')
    const {id} = useParams<{id: string}>()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

    const onSendComment = useCallback((text: string) => {
        dispatch(sendComment(text))
    }, [dispatch])

    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [props.className])}>
                {t('Статья не найдена')}
            </Page>
        )
    }

    return (
        <Page className={classNames(cls.ArticleDetailsPage, {}, [props.className])}>
            <Button onClick={onBackToList}>{t('Назад к списку')}</Button>
            <ArticleForm id={id}/>
            <Text className={cls.commentsTitle} title={t('Комментарии')}/>
            <AddCommentCard onSendComment={onSendComment}/>
            <ArticleCommentList articleId={id}/>
        </Page>

    )
}

export default ArticleDetailsPage
