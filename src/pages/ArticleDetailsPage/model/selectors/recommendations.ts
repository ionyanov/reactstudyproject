import type { StateSchema } from '@/shared/lib/providers/StoreProvider';

export const getArticleRecommendationsIsLoading: (
    state: StateSchema,
) => boolean = (state: StateSchema) => {
    return state.articlePage?.recommendations?.isLoading ?? true;
};

export const getArticleRecommendationsError: (
    state: StateSchema,
) => string | undefined = (state: StateSchema) => {
    return state.articlePage?.recommendations?.error;
};
