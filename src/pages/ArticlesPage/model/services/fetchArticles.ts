import { createAsyncThunk } from '@reduxjs/toolkit';
import { type Article, ArticleType } from '@/entities/Article';
import { addQueryParams } from '@/shared/lib/addQueryParams/addQueryParams';
import {
    type StateSchema,
    type ThunkConfig,
} from '@/shared/lib/providers/StoreProvider';
import {
    getArticlesLimit,
    getArticlesOrder,
    getArticlesPage,
    getArticlesSearch,
    getArticlesSortField,
    getArticlesType,
} from '../selectors/articlesPageSelector';

interface FetchArticlesProps {
    replace?: boolean;
}

export const fetchArticles = createAsyncThunk<
    Article[],
    FetchArticlesProps,
    ThunkConfig<string>
>('ArticlesPage/fetchArticles', async (props, thunkAPI) => {
    try {
        const limit = getArticlesLimit(thunkAPI.getState() as StateSchema);
        const page = getArticlesPage(thunkAPI.getState() as StateSchema);
        const search = getArticlesSearch(thunkAPI.getState() as StateSchema);
        const sort = getArticlesSortField(thunkAPI.getState() as StateSchema);
        const order = getArticlesOrder(thunkAPI.getState() as StateSchema);
        const type = getArticlesType(thunkAPI.getState() as StateSchema);

        addQueryParams({ sort, order, search, type });
        const response = await thunkAPI.extra.api.get<Article[]>('/articles', {
            params: {
                _expand: 'user',
                _limit: limit,
                _page: page,
                _sort: sort,
                _order: order,
                q: search,
                type: type === ArticleType.ALL ? undefined : type,
            },
        });
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue('error');
    }
});
