import { type FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { ArticlePageGreeting } from '@/features/articlePageGreeting';
import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    type ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    getArticlesIsLoading,
    getArticlesView,
} from '../../model/selectors/articlesPageSelector';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage';
import { initArticlesPage } from '../../model/services/initArticlesPage';
import {
    articlesPageReducer,
    getArticles,
} from '../../model/slice/articlesPageSlice';
import { ArticlesFilter } from '../ArticlesFilter/ArticlesFilter';
import cls from './ArticlesPage.module.scss';

interface ArticlePageProps {
    className?: string;
}

const reducers: ReducerList = {
    articlesAdapter: articlesPageReducer,
};

const ArticlesPage: FC<ArticlePageProps> = (props) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesIsLoading);
    const view = useSelector(getArticlesView);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlePage, {}, [props.className])}>
                <ArticlesFilter />
                <ArticleList
                    articles={articles}
                    isLoading={isLoading}
                    view={view}
                />
                <ArticlePageGreeting />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
