import { createAsyncThunk } from '@reduxjs/toolkit';
import { type Article, useArticleDetailData } from '@/entities/Article';
import { type ThunkConfig } from '@/shared/lib/providers/StoreProvider';

export const fetchRecommendation = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
>('ArticlesRecommendation/fetchRecommendation', async (props, thunkAPI) => {
    try {
        const article = useArticleDetailData(); // getArticleDetailsData(thunkAPI.getState() as StateSchema)

        const response = await thunkAPI.extra.api.get<Article[]>('/articles', {
            params: {
                _limit: 4,
                type: article?.type,
            },
        });
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue('error');
    }
});
