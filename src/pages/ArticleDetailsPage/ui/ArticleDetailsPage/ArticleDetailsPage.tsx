import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { ArticleRating } from '@/features/ArticleRating';
import { ArticleRecommendation } from '@/features/ArticleRecommendation';
import { getFeatures, ToggleFeaturesComp } from '@/shared/lib/features';
import { ArticleForm } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import type { ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Card } from '@/shared/ui/Card';
import { VStack } from '@/shared/ui/Stack';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailComments } from '../ArticleDetailPageComments/ArticleDetailComments';
import { ArticleDetailPageHeader } from '../ArticleDetailPageHeader/ArticleDetailPageHeader';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articlePage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();
    const isArticleRatingEnabled = getFeatures('isArticleRatingEnabled');

    if (!id) {
        return (
            <Page
                className={classNames(cls.ArticleDetailsPage, {}, [
                    props.className,
                ])}>
                {t('Статья не найдена')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page
                className={classNames(cls.ArticleDetailsPage, {}, [
                    props.className,
                ])}>
                <VStack gap={'16'} max>
                    <ArticleDetailPageHeader />
                    <ArticleForm id={id} />
                    {isArticleRatingEnabled && <ArticleRating articleId={id} />}
                    <ToggleFeaturesComp
                        feature={'isArticleRecommendationEnabled'}
                        on={<ArticleRecommendation />}
                        off={<Card>{t('Скоро появятся рекомендации!')}</Card>}
                    />
                    <ArticleDetailComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default ArticleDetailsPage;
