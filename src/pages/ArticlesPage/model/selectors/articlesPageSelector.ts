import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { type StateSchema } from '@/shared/lib/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';
import { type SortOrder } from '@/shared/types';

export const getArticlesError: (state: StateSchema) => string | undefined = (
    state: StateSchema,
) => {
    return state?.articlesAdapter?.error;
};

export const getArticlesIsLoading: (
    state: StateSchema,
) => boolean | undefined = (state: StateSchema) => {
    return state?.articlesAdapter?.isLoading;
};

export const getArticlesView: (state: StateSchema) => ArticleView = (
    state: StateSchema,
) => {
    return state?.articlesAdapter?.view || ArticleView.GRID;
};

export const getArticlesLimit: (state: StateSchema) => number = (
    state: StateSchema,
) => {
    return state?.articlesAdapter?.limit || 2;
};

export const getArticlesPage: (state: StateSchema) => number = (
    state: StateSchema,
) => {
    return state?.articlesAdapter?.page || 1;
};

export const getArticlesHasMore: (state: StateSchema) => boolean | undefined = (
    state: StateSchema,
) => {
    return state?.articlesAdapter?.hasMore;
};

export const getArticlesInited: (state: StateSchema) => boolean = (
    state: StateSchema,
) => {
    return state?.articlesAdapter?._inited ?? false;
};

export const getArticlesOrder: (state: StateSchema) => SortOrder = (
    state: StateSchema,
) => {
    return state?.articlesAdapter?.order ?? 'asc';
};

export const getArticlesSortField: (state: StateSchema) => ArticleSortField = (
    state: StateSchema,
) => {
    return state?.articlesAdapter?.sortField ?? ArticleSortField.CREATED;
};

export const getArticlesSearch: (state: StateSchema) => string = (
    state: StateSchema,
) => {
    return state?.articlesAdapter?.search ?? '';
};

export const getArticlesType: (state: StateSchema) => ArticleType = (
    state: StateSchema,
) => {
    return state?.articlesAdapter?.types ?? ArticleType.ALL;
};

export const [useArticleItemById] = buildSelector(
    (state, id: string) => state.articlesAdapter?.entities[id],
);
