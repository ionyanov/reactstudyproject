import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import {type ArticleDetailsSchema} from '../types/articleDetailsSchema'
import {type Article} from '../types/article'
import {fetchArticleById} from '../services/fetchArticleById'

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined
}

export const articleDetailSlice = createSlice({
    name: 'articleDetail',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<Article>) => {
            state.data = action.payload
        }
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

export const {actions: articleDetailActions} = articleDetailSlice
export const {reducer: articleDetailReducer} = articleDetailSlice
