import {createAsyncThunk} from '@reduxjs/toolkit'
import {getArticlesLimit} from 'pages/ArticlesPage/model/selectors/articlesPageSelector'
import {type Article} from 'entities/Article'
import {type StateSchema, type ThunkConfig} from 'shared/lib/providers/StoreProvider'

interface FetchArticlesProps {
    page: number
}

export const fetchArticles = createAsyncThunk<Article[], FetchArticlesProps, ThunkConfig<string>>(
    'ArticlesPage/fetchArticles',
    async (props, thunkAPI) => {
        try {
            const limit = getArticlesLimit(thunkAPI.getState() as StateSchema)

            const response = await thunkAPI.extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: props.page
                }
            })
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('error')
        }
    }
)
