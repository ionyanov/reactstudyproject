import {type FC} from 'react'
import {useTranslation} from 'react-i18next'
import {useParams} from 'react-router-dom'
import {Page} from '@/widgets/Page'
import {ArticleRating} from '@/features/ArticleRating'
import {ArticleRecommendation} from '@/features/ArticleRecommendation'
import {ArticleForm} from '@/entities/Article'
import {classNames} from '@/shared/lib/classNames/classNames'
import {VStack} from '@/shared/ui/Stack'
import {ArticleDetailComments} from '../ArticleDetailPageComments/ArticleDetailComments'
import {ArticleDetailPageHeader} from '../ArticleDetailPageHeader/ArticleDetailPageHeader'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const {t} = useTranslation('article')
    const {id} = useParams<{id: string}>()

    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [props.className])}>
                {t('Статья не найдена')}
            </Page>
        )
    }

    return (
        <Page className={classNames(cls.ArticleDetailsPage, {}, [props.className])}>
            <VStack gap={'16'} max>
                <ArticleDetailPageHeader/>
                <ArticleForm id={id}/>
                <ArticleRating articleId={id}/>
                <ArticleRecommendation/>
                <ArticleDetailComments id={id}/>
            </VStack>
        </Page>

    )
}

export default ArticleDetailsPage
