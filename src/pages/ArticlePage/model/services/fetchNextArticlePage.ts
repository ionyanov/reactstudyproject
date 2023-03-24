import {createAsyncThunk} from '@reduxjs/toolkit'
import {type StateSchema, type ThunkConfig} from 'app/providers/StoreProvider'
import {getArticlesHasMore, getArticlesIsLoading, getArticlesPage} from '../selectors/articlesPageSelector'
import {articlesPageAction} from '../slice/articlesPageSlice'
import {fetchArticles} from '../services/fetchArticles'

export const fetchNextArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'ArticlesPage/fetchNextArticlePage',
    async (props, thunkAPI) => {
        const hasMore = getArticlesHasMore(thunkAPI.getState() as StateSchema)
        const page = getArticlesPage(thunkAPI.getState() as StateSchema)
        const isLoading = getArticlesIsLoading(thunkAPI.getState() as StateSchema)
        if (hasMore && !isLoading) {
            thunkAPI.dispatch(articlesPageAction.setPage(page + 1))
            thunkAPI.dispatch(fetchArticles({page}))
        }
    }
)
