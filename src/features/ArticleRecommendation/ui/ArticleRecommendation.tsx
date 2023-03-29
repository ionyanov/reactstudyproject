import {type FC} from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {ArticleList} from 'entities/Article'
import {classNames} from 'shared/lib/classNames/classNames'
import {DynamicModuleLoader, type ReducerList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import {Text} from 'shared/ui/Text/Text'
import {getArticleRecommendationIsLoading} from '../model/selectors/articleRecommendation'
import {fetchRecommendation} from '../model/services/fetchRecommendation'
import {articleRecommendationReducer, getArticleRecommendations} from '../model/slices/articleRecommendationSlice'
import cls from './ArticleRecommendation.module.scss'

interface ArticleRecommendationProps {
    className?: string
}

const reducers: ReducerList = {
    articleRecommendation: articleRecommendationReducer
}
export const ArticleRecommendation: FC<ArticleRecommendationProps> = (props) => {
    const dispatch = useAppDispatch()
    const {t} = useTranslation()
    const recommendationIsLoading = useSelector(getArticleRecommendationIsLoading)
    const recommendations = useSelector(getArticleRecommendations.selectAll)

    useInitialEffect(() => {
        dispatch(fetchRecommendation())
    })

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticleRecommendation, {}, [props.className])}>
                <Text className={cls.title} title={t('Рекомендации')}/>
                <ArticleList
                    articles={recommendations}
                    isLoading={recommendationIsLoading}
                    className={cls.recommendationList}
                    target={'_blank'}
                />
            </div>
        </DynamicModuleLoader>
    )
}
