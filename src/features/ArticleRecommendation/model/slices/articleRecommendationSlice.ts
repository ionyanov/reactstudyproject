import {createEntityAdapter, createSlice, type PayloadAction} from '@reduxjs/toolkit'
import {type Article} from '@/entities/Article'
import {type StateSchema} from '@/shared/lib/providers/StoreProvider'
import {fetchRecommendation} from '../services/fetchRecommendation'
import {type ArticleRecommendationSchema} from '../types/articleRecommendationSchema'

const recommendationAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id
})

export const getArticleRecommendations = recommendationAdapter.getSelectors<StateSchema>(
    (state) => state.articleRecommendation || recommendationAdapter.getInitialState()
)

const articleRecommendationSlice = createSlice({
    name: 'articleRecommendationSlice',
    initialState: recommendationAdapter.getInitialState<ArticleRecommendationSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecommendation.pending, (state) => {
                state.error = ''
                state.isLoading = true
            })
            .addCase(fetchRecommendation.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false
                recommendationAdapter.setAll(state, action.payload)
            })
            .addCase(fetchRecommendation.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const {reducer: articleRecommendationReducer} = articleRecommendationSlice
