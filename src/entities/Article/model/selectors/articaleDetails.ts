import { type StateSchema } from '@/shared/lib/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const [useArticleDetailData, getArticleDetailsData] = buildSelector(
    (state: StateSchema) => {
        return state?.articleDetail?.data;
    },
);

export const getArticleDetailsError: (state: StateSchema) => string = (
    state: StateSchema,
) => {
    return state?.articleDetail?.error ?? '';
};

export const getArticleDetailsIsLoading: (state: StateSchema) => boolean = (
    state: StateSchema,
) => {
    return state?.articleDetail?.isLoading ?? false;
};
