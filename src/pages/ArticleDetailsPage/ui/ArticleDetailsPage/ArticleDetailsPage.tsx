import {type FC, useCallback} from 'react'
import {useTranslation} from 'react-i18next'
import {useParams} from 'react-router-dom'
import {Page} from 'widgets/Page'
import {AddCommentCard} from 'features/AddCommentCard'
import {ArticleCommentList} from 'features/ArticleCommentList'
import {ArticleRecommendation} from 'features/ArticleRecommendation'
import {ArticleForm} from 'entities/Article'
import {classNames} from 'shared/lib/classNames/classNames'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {Text} from 'shared/ui/Text/Text'
import {sendComment} from '../../model/services/sendComment'
import {ArticleDetailPageHeader} from '../ArticleDetailPageHeader/ArticleDetailPageHeader'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const {t} = useTranslation('article')
    const {id} = useParams<{id: string}>()
    const dispatch = useAppDispatch()

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
            <ArticleDetailPageHeader/>
            <ArticleForm id={id}/>
            <ArticleRecommendation/>
            <Text className={cls.commentsTitle} title={t('Комментарии')}/>
            <AddCommentCard onSendComment={onSendComment}/>
            <ArticleCommentList articleId={id}/>
        </Page>

    )
}

export default ArticleDetailsPage
