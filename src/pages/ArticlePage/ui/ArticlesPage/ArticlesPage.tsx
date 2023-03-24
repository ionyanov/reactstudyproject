import {type FC, memo, useCallback} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import {ArticleList, type ArticleView} from 'entities/Article'
import {DynamicModuleLoader, type ReducerList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {articlesPageAction, articlesPageReducer, getArticles} from '../../model/slice/articlesPageSlice'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import {fetchArticles} from '../../model/services/fetchArticles'
import {useSelector} from 'react-redux'
import {getArticlesIsLoading, getArticlesView} from '../../model/selectors/articlesPageSelector'
import {ArticleViewSelector} from 'features/ArticleVewSelector'
import {Page} from 'shared/ui/Page/Page'
import {fetchNextArticlePage} from '../../model/services/fetchNextArticlePage'

interface ArticlePageProps {
    className?: string
}

const reducers: ReducerList = {
    articlesAdapter: articlesPageReducer
}

const ArticlesPage: FC<ArticlePageProps> = (props) => {
    const dispatch = useAppDispatch()
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesIsLoading)
    // const errors = useSelector(getArticlesError)
    const view = useSelector(getArticlesView)
    // const page = useSelector(getArticlesPage)

    useInitialEffect(() => {
        dispatch(articlesPageAction.initState())
        dispatch(fetchArticles({page: 1}))
    })

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage())
    }, [dispatch])

    const setView = useCallback((view: ArticleView) => {
        dispatch(articlesPageAction.setView(view))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlePage, {}, [props.className])}
            >
                <ArticleViewSelector onViewSelect={setView} selectedView={view}/>
                <ArticleList
                    articles={articles}
                    isLoading={isLoading}
                    view={view}
                />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
