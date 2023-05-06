import {type PayloadAction} from '@reduxjs/toolkit'
import {buildSlice} from '@/shared/lib/store'
import {fetchArticleById} from '../services/fetchArticleById'
import {type Article} from '../types/article'
import {type ArticleDetailsSchema} from '../types/articleDetailsSchema'

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined
}

export const articleDetailSlice = buildSlice({
    name: 'articleDetail',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state, action) => {
                state.error = ''
                state.isLoading = true
            })
            .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
                state.data = action.payload
                state.isLoading = false
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const {
    actions: articleDetailActions,
    reducer: articleDetailReducer,
    useActions: useArticleDetailActions
} = articleDetailSlice
