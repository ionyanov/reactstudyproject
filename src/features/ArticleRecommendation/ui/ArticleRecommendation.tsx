import {type FC} from 'react'
import {useTranslation} from 'react-i18next'
import {ArticleList} from '@/entities/Article'
import {classNames} from '@/shared/lib/classNames/classNames'
import {DynamicModuleLoader, type ReducerList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {VStack} from '@/shared/ui/Stack'
import {Text} from '@/shared/ui/Text/Text'
import {useArticleRecommendation} from '../model/api/recomendationApi'
import {articleRecommendationReducer} from '../model/slices/articleRecommendationSlice'
import cls from './ArticleRecommendation.module.scss'

interface ArticleRecommendationProps {
    className?: string
}

const reducers: ReducerList = {
    articleRecommendation: articleRecommendationReducer
}
export const ArticleRecommendation: FC<ArticleRecommendationProps> = (props) => {
    const {t} = useTranslation()
    const {data = [], isLoading} = useArticleRecommendation(3)

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack max className={classNames(cls.ArticleRecommendation, {}, [props.className])}>
                <Text className={cls.title} title={t('Рекомендации')}/>
                <ArticleList
                    articles={data}
                    isLoading={isLoading}
                    className={cls.recommendationList}
                    target={'_blank'}
                />
            </VStack>
        </DynamicModuleLoader>
    )
}
