import {createAsyncThunk} from '@reduxjs/toolkit'
import {type ArticleSortField, type ArticleType} from 'entities/Article'
import {type StateSchema, type ThunkConfig} from 'shared/lib/providers/StoreProvider'
import {type SortOrder} from 'shared/types'
import {getArticlesInited} from '../selectors/articlesPageSelector'
import {fetchArticles} from '../services/fetchArticles'
import {articlesPageAction} from '../slice/articlesPageSlice'

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'ArticlesPage/initArticlesPage',
    async (props, thunkAPI) => {
        const inited = getArticlesInited(thunkAPI.getState() as StateSchema)
        if (!inited) {
            const searchFromUrl = props.get('search')
            const orderFromUrl = props.get('order') as SortOrder
            const sortFromUrl = props.get('sort') as ArticleSortField
            const typeFromUrl = props.get('type') as ArticleType
            if (sortFromUrl) {
                thunkAPI.dispatch(articlesPageAction.setSort(sortFromUrl))
            }
            if (orderFromUrl) {
                thunkAPI.dispatch(articlesPageAction.setOrder(orderFromUrl))
            }
            if (searchFromUrl) {
                thunkAPI.dispatch(articlesPageAction.setSearch(searchFromUrl))
            }
            if (typeFromUrl) {
                thunkAPI.dispatch(articlesPageAction.setTypes(typeFromUrl))
            }

            thunkAPI.dispatch(articlesPageAction.initState())
            thunkAPI.dispatch(fetchArticles({}))
        }
    }
)
