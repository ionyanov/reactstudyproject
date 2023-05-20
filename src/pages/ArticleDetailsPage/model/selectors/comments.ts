import type { StateSchema } from '@/shared/lib/providers/StoreProvider';

export const getArticleCommentsIsLoading: (state: StateSchema) => boolean = (
    state: StateSchema,
) => {
    return state.articlePage?.comments?.isLoading ?? false;
};

export const getArticleCommentsError: (
    state: StateSchema,
) => string | undefined = (state: StateSchema) => {
    return state.articlePage?.comments?.error;
};
