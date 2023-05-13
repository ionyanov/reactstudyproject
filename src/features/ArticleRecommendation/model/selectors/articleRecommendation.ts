import { type StateSchema } from '@/shared/lib/providers/StoreProvider';

export const getArticleRecommendationIsLoading: (
    state: StateSchema,
) => boolean = (state: StateSchema) => {
    return state?.articleRecommendation?.isLoading ?? false;
};

export const getArticleRecommendationError: (
    state: StateSchema,
) => string | undefined = (state: StateSchema) => {
    return state?.articleRecommendation?.error;
};
