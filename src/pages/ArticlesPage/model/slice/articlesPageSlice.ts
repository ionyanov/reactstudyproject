import {
    createEntityAdapter,
    createSlice,
    type PayloadAction,
} from '@reduxjs/toolkit';
import {
    type Article,
    ArticleSortField,
    ArticleType,
    ArticleView,
} from '@/entities/Article';
import { LOCALSTORAGE_ARTICLE_VIEW_KEY } from '@/shared/const/localstorage';
import { type StateSchema } from '@/shared/lib/providers/StoreProvider';
import { type SortOrder } from '@/shared/types';
import { fetchArticles } from '../services/fetchArticles';
import { type ArticlesPageSchema } from '../types/articlesPage';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesAdapter || articlesAdapter.getInitialState(),
);

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
        hasMore: true,
        _inited: false,
        sortField: ArticleSortField.CREATED,
        order: 'asc',
        search: '',
        types: ArticleType.ALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            state.limit = state.view === ArticleView.GRID ? 6 : 2;
            localStorage.setItem(LOCALSTORAGE_ARTICLE_VIEW_KEY, state.view);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setHasMore: (state, action: PayloadAction<boolean>) => {
            state.hasMore = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sortField = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setTypes: (state, action: PayloadAction<ArticleType>) => {
            state.types = action.payload;
        },
        initState: (state) => {
            const view =
                (localStorage.getItem(
                    LOCALSTORAGE_ARTICLE_VIEW_KEY,
                ) as ArticleView) || ArticleView.GRID;
            state.view = view;
            state.limit = view === ArticleView.GRID ? 6 : 2;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state, action) => {
                state.error = '';
                state.isLoading = true;
                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;
                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articlesPageAction } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
