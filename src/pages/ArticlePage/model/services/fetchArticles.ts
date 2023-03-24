import {createAsyncThunk} from '@reduxjs/toolkit'
import {type StateSchema, type ThunkConfig} from 'app/providers/StoreProvider'
import {type Article} from 'entities/Article'
import {getArticlesLimit} from 'pages/ArticlePage/model/selectors/articlesPageSelector'

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
