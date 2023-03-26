import {createEntityAdapter, createSlice, type PayloadAction} from '@reduxjs/toolkit'
import {type Article, ArticleView} from 'entities/Article'
import {LOCALSTORAGE_ARTICLE_VIEW_KEY} from 'shared/const/localstorage'
import {type StateSchema} from 'shared/lib/providers/StoreProvider'
import {fetchArticles} from '../services/fetchArticles'
import {type ArticlesPageSchema} from '../types/articlesPage'

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesAdapter || articlesAdapter.getInitialState()
)

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.GRID,
        page: 1,
        limit: 6,
        hasMore: true
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            state.limit = state.view === ArticleView.GRID ? 6 : 2
            localStorage.setItem(LOCALSTORAGE_ARTICLE_VIEW_KEY, state.view)
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setHasMore: (state, action: PayloadAction<boolean>) => {
            state.hasMore = action.payload
        },
        initState: (state) => {
            const view = localStorage.getItem(LOCALSTORAGE_ARTICLE_VIEW_KEY) as ArticleView || ArticleView.GRID
            state.view = view
            state.limit = view === ArticleView.GRID ? 6 : 2
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state, action) => {
                state.error = ''
                state.isLoading = true
            })
            .addCase(fetchArticles.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false
                articlesAdapter.addMany(state, action.payload)
                state.hasMore = action.payload.length > 0
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const {actions: articlesPageAction} = articlesPageSlice
export const {reducer: articlesPageReducer} = articlesPageSlice
