import {type FC, memo} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleCommentList.module.scss'
import {useSelector} from 'react-redux'
import {CommentList} from 'entities/Comment'
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {DynamicModuleLoader, type ReducerList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {getArticleCommentListIsLoading} from '../model/selectors/articleCommentListSelectors'
import {fetchCommentsByArticleId} from '../model/services/fetchCommentsByArticleId'
import {articleCommentListReducer, getArticleComments} from '../model/slices/articleCommentListSlice'

interface ArticleCommentListProps {
    className?: string
    articleId: string
}

const reducers: ReducerList = {
    articleCommentList: articleCommentListReducer
}

const ArticleCommentList: FC<ArticleCommentListProps> = memo((props: ArticleCommentListProps) => {
    const dispatch = useAppDispatch()

    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentListIsLoading)
    // const commentsError = useSelector(getArticleDetailCommentsError)

    useInitialEffect(() => {
        if (props.articleId) {
            dispatch(fetchCommentsByArticleId(props.articleId))
        }
    })
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticleCommentList, {}, [props.className])}>
                <CommentList comments={comments} isLoading={commentsIsLoading}/>
            </div>
        </DynamicModuleLoader>
    )
})

export default ArticleCommentList
