import {createAsyncThunk} from '@reduxjs/toolkit'
import {type ThunkConfig} from '@/shared/lib/providers/StoreProvider'
import {type Article} from '../types/article'

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'article/fetchArticleById',
    async (articleId, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Article>(`/articles/${articleId}`,
                {
                    params: {
                        _expand: 'user'
                    }
                }
            )
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('error')
        }
    }
)
