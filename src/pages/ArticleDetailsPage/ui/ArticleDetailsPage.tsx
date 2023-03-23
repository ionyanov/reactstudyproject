import {type FC, useCallback} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import {useTranslation} from 'react-i18next'
import {ArticleForm} from 'entities/Article'
import {useParams} from 'react-router-dom'
import {ArticleCommentList} from 'features/ArticleCommentList'
import {Text} from 'shared/ui/Text/Text'
import {AddCommentCard} from 'features/AddCommentCard'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {sendComment} from 'pages/ArticleDetailsPage/model/services/sendComment'

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
            <div className={classNames(cls.ArticleDetailsPage, {}, [props.className])}>
                {t('Статья не найдена')}
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [props.className])}>
            <ArticleForm id={id}/>
            <Text className={cls.commentsTitle} title={t('Комментарии')}/>
            <AddCommentCard onSendComment={onSendComment}/>
            <ArticleCommentList articleId={id}/>
        </div>

    )
}

export default ArticleDetailsPage
