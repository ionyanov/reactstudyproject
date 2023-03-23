import {createAsyncThunk} from '@reduxjs/toolkit'
import {type ThunkConfig} from 'app/providers/StoreProvider'
import {type Article} from 'entities/Article'

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'article/fetchArticleById',
    async (articleId, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Article>(`/articles/${articleId}`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('error')
        }
    }
)
